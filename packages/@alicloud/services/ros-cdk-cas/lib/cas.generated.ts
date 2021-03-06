// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::CAS::Certificate`
 */
export interface RosCertificateProps {

    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    readonly cert: string;

    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    readonly key: string;

    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    readonly name: string;

    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    readonly lang?: string;

    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    readonly sourceIp?: string;
}

/**
 * Determine whether the given properties match those of a `RosCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosCertificatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceIp', ros.validateString)(properties.sourceIp));
    errors.collect(ros.propertyValidator('lang', ros.validateString)(properties.lang));
    errors.collect(ros.propertyValidator('cert', ros.requiredValidator)(properties.cert));
    errors.collect(ros.propertyValidator('cert', ros.validateString)(properties.cert));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CAS::Certificate` resource
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CAS::Certificate` resource.
 */
// @ts-ignore TS6133
function rosCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      Cert: ros.stringToRosTemplate(properties.cert),
      Key: ros.stringToRosTemplate(properties.key),
      Name: ros.stringToRosTemplate(properties.name),
      Lang: ros.stringToRosTemplate(properties.lang),
      SourceIp: ros.stringToRosTemplate(properties.sourceIp),
    };
}

/**
 * A ROS template type:  `ALIYUN::CAS::Certificate`
 */
export class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::Certificate";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CertId: Certificate ID.
     */
    public readonly attrCertId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    public cert: string;

    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    public key: string;

    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    public name: string;

    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    public lang: string | undefined;

    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    public sourceIp: string | undefined;

    /**
     * Create a new `ALIYUN::CAS::Certificate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertId = ros.Token.asString(this.getAtt('CertId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cert = props.cert;
        this.key = props.key;
        this.name = props.name;
        this.lang = props.lang;
        this.sourceIp = props.sourceIp;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cert: this.cert,
            key: this.key,
            name: this.name,
            lang: this.lang,
            sourceIp: this.sourceIp,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
