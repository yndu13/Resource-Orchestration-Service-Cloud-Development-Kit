import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthPackage } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenBandwidthPackage as CenBandwidthPackageProperty };

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthPackage`
 */
export interface CenBandwidthPackageProps {

    /**
     * @Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
     */
    readonly bandwidth: number;

    /**
     * @Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionAId: string;

    /**
     * @Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionBId: string;

    /**
     * @Property autoPay: Whether to automatically pay the bill. Valid value:
     * true
     * false (Default)
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
     */
    readonly autoRenewDuration?: number;

    /**
     * @Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    readonly bandwidthPackageChargeType?: string;

    /**
     * @Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
     */
    readonly description?: string;

    /**
     * @Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
     */
    readonly name?: string;

    /**
     * @Property period: The purchase period. The default value is 1.
     */
    readonly period?: number;

    /**
     * @Property pricingCycle: The pricing cycle.
     */
    readonly pricingCycle?: string;
}

/**
 * A ROS resource type:  `ALIYUN::CEN::CenBandwidthPackage`
 */
export class CenBandwidthPackage extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute CenBandwidthPackageId: The ID of the bandwidth package.
     */
    public readonly attrCenBandwidthPackageId: any;

    /**
     * Create a new `ALIYUN::CEN::CenBandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenBandwidthPackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenBandwidthPackage = new RosCenBandwidthPackage(this, id,  {
            description: props.description,
            bandwidthPackageChargeType: props.bandwidthPackageChargeType,
            geographicRegionBId: props.geographicRegionBId,
            geographicRegionAId: props.geographicRegionAId,
            pricingCycle: props.pricingCycle ? props.pricingCycle : 'Month',
            autoRenew: props.autoRenew,
            bandwidth: props.bandwidth,
            period: props.period ? props.period : 1,
            autoPay: props.autoPay ? props.autoPay : false,
            autoRenewDuration: props.autoRenewDuration,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenBandwidthPackage;
        this.attrCenBandwidthPackageId = rosCenBandwidthPackage.attrCenBandwidthPackageId;
    }
}
