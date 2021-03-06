import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomain } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomDomain as CustomDomainProperty };

/**
 * Properties for defining a `ALIYUN::FC::CustomDomain`
 */
export interface CustomDomainProps {

    /**
     * @Property domainName: domain name
     */
    readonly domainName: string;

    /**
     * @Property protocol: HTTP or HTTP,HTTPS
     */
    readonly protocol: string;

    /**
     * @Property apiVersion: api version
     */
    readonly apiVersion?: string;

    /**
     * @Property certConfig: certificate info
     */
    readonly certConfig?: RosCustomDomain.CertConfigProperty | ros.IResolvable;

    /**
     * @Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    readonly routeConfig?: RosCustomDomain.RouteConfigProperty | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::FC::CustomDomain`
 */
export class CustomDomain extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute Domain: The domain with protocol.
     */
    public readonly attrDomain: any;

    /**
     * @Attribute DomainName: The domain name
     */
    public readonly attrDomainName: any;

    /**
     * Create a new `ALIYUN::FC::CustomDomain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomDomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCustomDomain = new RosCustomDomain(this, id,  {
            apiVersion: props.apiVersion,
            certConfig: props.certConfig,
            domainName: props.domainName,
            routeConfig: props.routeConfig,
            protocol: props.protocol,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomDomain;
        this.attrDomain = rosCustomDomain.attrDomain;
        this.attrDomainName = rosCustomDomain.attrDomainName;
    }
}
