import {
    CfnOutput,
    RemovalPolicy,
    Stack,
    StackProps,
    aws_certificatemanager as acm,
    aws_cloudfront as cloudfront,
    aws_route53 as route53,
    aws_s3 as s3,
    aws_route53_targets as targets,
} from 'aws-cdk-lib'
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager'
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins'
import { Construct } from 'constructs'

export class RedirectDomainStack extends Stack {
  public readonly certificateArn: string

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const redirectDomainNames = ['convergedirect.com', 'www.convergedirect.com']
    const targetDomainName = 'www.convergemarketing.com'

    const redirectBucket = new s3.Bucket(this, 'RedirectBucket', {
      bucketName: 'convergedirect.com',
      removalPolicy: RemovalPolicy.DESTROY,
      websiteRedirect: {
        hostName: targetDomainName,
        protocol: s3.RedirectProtocol.HTTPS,
      },
    })

    //  Get the hosted zone for the redirect domain
    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: 'convergedirect.com',
    })

    const certificate = new Certificate(this, 'SiteCertificate', {
      domainName: 'convergedirect.com',
      subjectAlternativeNames: [
        `*.convergedirect.com`,
        `*.qa.convergedirect.com`,
      ],
      validation: acm.CertificateValidation.fromDns(hostedZone),
    })

    this.certificateArn = certificate.certificateArn

    new CfnOutput(this, 'CertificateArn', {
      value: certificate.certificateArn,
    })

   const redirectDistribution = new cloudfront.Distribution(this, 'RedirectDistribution', {
      defaultBehavior: {
        origin: new S3Origin(redirectBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED, // No need to cache redirects
      },
      domainNames: redirectDomainNames,
      certificate,
    });

    for (const domainName of redirectDomainNames) {
      new route53.ARecord(this, `AliasRecord${domainName}`, {
        zone: hostedZone,
        target: route53.RecordTarget.fromAlias(
          new targets.CloudFrontTarget(redirectDistribution)
        ),
        recordName: domainName,
      })
    }
  }
}
