import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ECI::ContainerGroup`
 */
export interface RosContainerGroupProps {
    /**
     * @Property container: The containers that constitute the container group.
     */
    readonly container: Array<RosContainerGroup.ContainerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property containerGroupName: The name of the container group.
     * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
     */
    readonly containerGroupName: string;
    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     */
    readonly securityGroupId: string;
    /**
     * @Property vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
     */
    readonly vSwitchId: string;
    /**
     * @Property activeDeadlineSeconds: The validity period in seconds.
     */
    readonly activeDeadlineSeconds?: number;
    /**
     * @Property autoMatchImageCache: Specifies whether to automatically match the image cache.
     */
    readonly autoMatchImageCache?: boolean | ros.IResolvable;
    /**
     * @Property cpu: CPU size
     */
    readonly cpu?: number;
    /**
     * @Property dnsConfig: The information about DNS configurations.
     */
    readonly dnsConfig?: RosContainerGroup.DnsConfigProperty | ros.IResolvable;
    /**
     * @Property eipInstanceId: Elastic IP ID
     */
    readonly eipInstanceId?: string;
    /**
     * @Property hostAliase: Customize the hostname mapping of a container inside the pod
     */
    readonly hostAliase?: Array<RosContainerGroup.HostAliaseProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
     */
    readonly imageRegistryCredential?: Array<RosContainerGroup.ImageRegistryCredentialProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageSnapshotId: Image cache ID or snapshot ID.
     */
    readonly imageSnapshotId?: string;
    /**
     * @Property initContainer: The containers that constitute the container group for initializing.
     */
    readonly initContainer?: Array<RosContainerGroup.InitContainerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceType: The type of the ECS instance.
     */
    readonly instanceType?: string;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses.
     */
    readonly ipv6AddressCount?: number;
    /**
     * @Property memory: memory size
     */
    readonly memory?: number;
    /**
     * @Property ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
     */
    readonly ramRoleName?: string;
    /**
     * @Property restartPolicy: The policy for restarting the instance. Default value: Always.
     */
    readonly restartPolicy?: string;
    /**
     * @Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
     * Currently only two Sysctl keyNames are supported:
     * Kernel.shm_rmid_forced
     * Kernel.msgmax
     */
    readonly securityContextSysctl?: Array<RosContainerGroup.SecurityContextSysctlProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property slsEnable: Enable user log collection. The default is False.
     */
    readonly slsEnable?: boolean | ros.IResolvable;
    /**
     * @Property spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
     */
    readonly spotPriceLimit?: number;
    /**
     * @Property spotStrategy: Instance preemption strategy.
     * Ranges:
     * NoSpot (default): normal pay-as-you-go instances.
     * SpotWithPriceLimit: Preemptive instance that sets a cap price.
     * SpotAsPriceGo: The system automatically bids, following the current market actual price.
     */
    readonly spotStrategy?: string;
    /**
     * @Property tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
     */
    readonly terminationGracePeriodSeconds?: number;
    /**
     * @Property volume: The data volume. You can specify a maximum of 20 data volumes.
     */
    readonly volume?: Array<RosContainerGroup.VolumeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    readonly zoneId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ECI::ContainerGroup`
 */
export declare class RosContainerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECI::ContainerGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ContainerGroupId: The ID of the container group.
     */
    readonly attrContainerGroupId: any;
    /**
     * @Attribute ContainerGroupName: The name of the container group.
     */
    readonly attrContainerGroupName: any;
    /**
     * @Attribute EniInstanceId: ENI instance ID.
     */
    readonly attrEniInstanceId: any;
    /**
     * @Attribute InternetIp: Internet IP.
     */
    readonly attrInternetIp: any;
    /**
     * @Attribute IntranetIp: Intranet IP.
     */
    readonly attrIntranetIp: any;
    /**
     * @Attribute Ipv6Address: Ipv6 address.
     */
    readonly attrIpv6Address: any;
    /**
     * @Attribute RegionId: The ID of the region in which the instance resides.
     */
    readonly attrRegionId: any;
    /**
     * @Attribute SecurityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     */
    readonly attrSecurityGroupId: any;
    /**
     * @Attribute VSwitchId: The ID of the VSwitch. Currently, ECI instances can only be deployed in VPCs.
     */
    readonly attrVSwitchId: any;
    /**
     * @Attribute ZoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    readonly attrZoneId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property container: The containers that constitute the container group.
     */
    container: Array<RosContainerGroup.ContainerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property containerGroupName: The name of the container group.
     * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
     */
    containerGroupName: string;
    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     */
    securityGroupId: string;
    /**
     * @Property vSwitchId: The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.
     */
    vSwitchId: string;
    /**
     * @Property activeDeadlineSeconds: The validity period in seconds.
     */
    activeDeadlineSeconds: number | undefined;
    /**
     * @Property autoMatchImageCache: Specifies whether to automatically match the image cache.
     */
    autoMatchImageCache: boolean | ros.IResolvable | undefined;
    /**
     * @Property cpu: CPU size
     */
    cpu: number | undefined;
    /**
     * @Property dnsConfig: The information about DNS configurations.
     */
    dnsConfig: RosContainerGroup.DnsConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property eipInstanceId: Elastic IP ID
     */
    eipInstanceId: string | undefined;
    /**
     * @Property hostAliase: Customize the hostname mapping of a container inside the pod
     */
    hostAliase: Array<RosContainerGroup.HostAliaseProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
     */
    imageRegistryCredential: Array<RosContainerGroup.ImageRegistryCredentialProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageSnapshotId: Image cache ID or snapshot ID.
     */
    imageSnapshotId: string | undefined;
    /**
     * @Property initContainer: The containers that constitute the container group for initializing.
     */
    initContainer: Array<RosContainerGroup.InitContainerProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The type of the ECS instance.
     */
    instanceType: string | undefined;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses.
     */
    ipv6AddressCount: number | undefined;
    /**
     * @Property memory: memory size
     */
    memory: number | undefined;
    /**
     * @Property ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
     */
    ramRoleName: string | undefined;
    /**
     * @Property restartPolicy: The policy for restarting the instance. Default value: Always.
     */
    restartPolicy: string | undefined;
    /**
     * @Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
     * Currently only two Sysctl keyNames are supported:
     * Kernel.shm_rmid_forced
     * Kernel.msgmax
     */
    securityContextSysctl: Array<RosContainerGroup.SecurityContextSysctlProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property slsEnable: Enable user log collection. The default is False.
     */
    slsEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
     */
    spotPriceLimit: number | undefined;
    /**
     * @Property spotStrategy: Instance preemption strategy.
     * Ranges:
     * NoSpot (default): normal pay-as-you-go instances.
     * SpotWithPriceLimit: Preemptive instance that sets a cap price.
     * SpotAsPriceGo: The system automatically bids, following the current market actual price.
     */
    spotStrategy: string | undefined;
    /**
     * @Property tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
     */
    tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
     */
    terminationGracePeriodSeconds: number | undefined;
    /**
     * @Property volume: The data volume. You can specify a maximum of 20 data volumes.
     */
    volume: Array<RosContainerGroup.VolumeProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::ECI::ContainerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContainerGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface ConfigFileVolumeConfigFileToPathProperty {
        /**
         * @Property path: The relative path in the configuration file. You can specify a location of a directory relative to another directory.
         */
        readonly path: string;
        /**
         * @Property content: The content of the configuration file. Maximum size: 32 KB.
         */
        readonly content?: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface ContainerProperty {
        /**
         * @Property readinessProbe: The readiness probe.
         */
        readonly readinessProbe?: RosContainerGroup.ReadinessProbeProperty | ros.IResolvable;
        /**
         * @Property livenessProbe: The liveness probe.
         */
        readonly livenessProbe?: RosContainerGroup.LivenessProbeProperty | ros.IResolvable;
        /**
         * @Property memory: The memory assigned to the container. Unit: GiB.
         */
        readonly memory?: number;
        /**
         * @Property port: The open ports and protocols. You can set a maximum of 100 ports.
         */
        readonly port?: Array<RosContainerGroup.PortProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
         */
        readonly cpu?: number;
        /**
         * @Property image: The container image.
         */
        readonly image: string;
        /**
         * @Property stdinOnce: undefined
         */
        readonly stdinOnce?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the container.
         */
        readonly name: string;
        /**
         * @Property stdin: undefined
         */
        readonly stdin?: boolean | ros.IResolvable;
        /**
         * @Property workingDir: The working directory for the container.
         */
        readonly workingDir?: string;
        /**
         * @Property imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
         */
        readonly imagePullPolicy?: string;
        /**
         * @Property command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
         */
        readonly command?: string[];
        /**
         * @Property arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
         */
        readonly arg?: string[];
        /**
         * @Property tty: undefined
         */
        readonly tty?: boolean | ros.IResolvable;
        /**
         * @Property securityContext: The security context of the container group.
         */
        readonly securityContext?: RosContainerGroup.SecurityContextProperty | ros.IResolvable;
        /**
         * @Property volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
         */
        readonly volumeMount?: Array<RosContainerGroup.VolumeMountProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
         */
        readonly environmentVar?: Array<RosContainerGroup.EnvironmentVarProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface DnsConfigProperty {
        /**
         * @Property nameServer: The list of IP addresses for DNS servers.
         */
        readonly nameServer?: string[];
        /**
         * @Property search: The list of DNS search domains.
         */
        readonly search?: string[];
        /**
         * @Property option: The list of options. Each option includes a name and a value. The value is optional.
         */
        readonly option?: Array<RosContainerGroup.OptionProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface EnvironmentVarProperty {
        /**
         * @Property value: The value of the variable.
         */
        readonly value?: string;
        /**
         * @Property key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
         */
        readonly key?: string;
        /**
         * @Property fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
         */
        readonly fieldRefFieldPath?: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface HostAliaseProperty {
        /**
         * @Property ip: undefined
         */
        readonly ip?: string;
        /**
         * @Property hostname: undefined
         */
        readonly hostname?: string[];
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface ImageRegistryCredentialProperty {
        /**
         * @Property userName: The username that is used to log on to the image repository.
         */
        readonly userName: string;
        /**
         * @Property server: The IP address of the image repository. This address does not include a protocol prefix, such as http:// or https://.
         */
        readonly server: string;
        /**
         * @Property password: The password that is used to log on to the image repository.
         */
        readonly password: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface InitContainerProperty {
        /**
         * @Property workingDir: The working directory for the container.
         */
        readonly workingDir?: string;
        /**
         * @Property imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
         */
        readonly imagePullPolicy?: string;
        /**
         * @Property command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
         */
        readonly command?: string[];
        /**
         * @Property memory: The memory assigned to the container. Unit: GiB.
         */
        readonly memory?: number;
        /**
         * @Property arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
         */
        readonly arg?: string[];
        /**
         * @Property port: The open ports and protocols. You can set a maximum of 100 ports.
         */
        readonly port?: Array<RosContainerGroup.PortProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityContext: The security context of the container group.
         */
        readonly securityContext?: RosContainerGroup.SecurityContextProperty | ros.IResolvable;
        /**
         * @Property cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
         */
        readonly cpu?: number;
        /**
         * @Property volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
         */
        readonly volumeMount?: Array<RosContainerGroup.VolumeMountProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property image: The container image.
         */
        readonly image?: string;
        /**
         * @Property environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
         */
        readonly environmentVar?: Array<RosContainerGroup.EnvironmentVarProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: The name of the container.
         */
        readonly name?: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface LivenessProbeProperty {
        /**
         * @Property timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
         */
        readonly timeoutSeconds?: number;
        /**
         * @Property initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
         */
        readonly initialDelaySeconds?: number;
        /**
         * @Property periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
         */
        readonly periodSeconds?: number;
        /**
         * @Property failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
         */
        readonly failureThreshold?: number;
        /**
         * @Property successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
         */
        readonly successThreshold?: number;
        /**
         * @Property execCommand: The commands for running the readiness probe.
         */
        readonly execCommand?: string[];
        /**
         * @Property httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPort?: number;
        /**
         * @Property tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
         */
        readonly tcpSocketPort?: number;
        /**
         * @Property httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
         */
        readonly httpGetScheme?: string;
        /**
         * @Property httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPath?: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface OptionProperty {
        /**
         * @Property value: The value of the option.
         */
        readonly value?: string;
        /**
         * @Property name: The name of the option.
         */
        readonly name?: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface PortProperty {
        /**
         * @Property port: The port number. Valid values: 1-65535.
         */
        readonly port?: number;
        /**
         * @Property protocol: The protocol that the port uses. Valid values: TCP and UDP
         */
        readonly protocol?: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface ReadinessProbeProperty {
        /**
         * @Property timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
         */
        readonly timeoutSeconds?: number;
        /**
         * @Property initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
         */
        readonly initialDelaySeconds?: number;
        /**
         * @Property periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
         */
        readonly periodSeconds?: number;
        /**
         * @Property failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
         */
        readonly failureThreshold?: number;
        /**
         * @Property successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
         */
        readonly successThreshold?: number;
        /**
         * @Property execCommand: The commands for running the readiness probe.
         */
        readonly execCommand?: string[];
        /**
         * @Property httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPort?: number;
        /**
         * @Property tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
         */
        readonly tcpSocketPort?: number;
        /**
         * @Property httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
         */
        readonly httpGetScheme?: string;
        /**
         * @Property httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPath?: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface SecurityContextProperty {
        /**
         * @Property runAsUser: User ID.
         */
        readonly runAsUser?: number;
        /**
         * @Property readOnlyRootFilesystem: Valid value: True.
         */
        readonly readOnlyRootFilesystem?: boolean | ros.IResolvable;
        /**
         * @Property capabilityAdd: undefined
         */
        readonly capabilityAdd?: string[];
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface SecurityContextSysctlProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string;
        /**
         * @Property name: undefined
         */
        readonly name?: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface TagProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string;
        /**
         * @Property key: The keyword of the tag.
         */
        readonly key: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface VolumeProperty {
        /**
         * @Property type: The type of volume. Valid values: EmptyDirVolume, NFSVolume, and ConfigFileVolume.
         */
        readonly type: string;
        /**
         * @Property name: The name of the volume.
         */
        readonly name: string;
        /**
         * @Property nfsVolumeServer: The IP address of the NFS server.
         */
        readonly nfsVolumeServer?: string;
        /**
         * @Property nfsVolumeReadOnly: Default value: False.
         */
        readonly nfsVolumeReadOnly?: boolean | ros.IResolvable;
        /**
         * @Property configFileVolumeConfigFileToPath: The path to the configuration file.
         */
        readonly configFileVolumeConfigFileToPath?: Array<RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nfsVolumePath: The path to the NFS volume.
         */
        readonly nfsVolumePath?: string;
        /**
         * @Property emptyDirVolumeMedium: The storage medium for EmptyDirVolume. By default, the file system on the node is used. Default value: not specified. Valid value: Memory. If this parameter is set to Memory, the EmptyDirVolume volume is stored in memory.
         */
        readonly emptyDirVolumeMedium?: string;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface VolumeMountProperty {
        /**
         * @Property readOnly: Default value: False.
         */
        readonly readOnly?: boolean | ros.IResolvable;
        /**
         * @Property mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
         */
        readonly mountPath?: string;
        /**
         * @Property name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
         */
        readonly name?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::ECI::ImageCache`
 */
export interface RosImageCacheProps {
    /**
     * @Property image: The image list to be cached.
     */
    readonly image: string[];
    /**
     * @Property imageCacheName: Image cache name.
     */
    readonly imageCacheName: string;
    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string;
    /**
     * @Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    readonly eipInstanceId?: string;
    /**
     * @Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
     */
    readonly imageRegistryCredential?: string[];
    /**
     * @Property resourceGroupId: Resource group.
     */
    readonly resourceGroupId?: string;
}
/**
 * A ROS template type:  `ALIYUN::ECI::ImageCache`
 */
export declare class RosImageCache extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECI::ImageCache";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ImageCacheId: The ID of the image cache.
     */
    readonly attrImageCacheId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property image: The image list to be cached.
     */
    image: string[];
    /**
     * @Property imageCacheName: Image cache name.
     */
    imageCacheName: string;
    /**
     * @Property securityGroupId: Security group ID.
     */
    securityGroupId: string;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    vSwitchId: string;
    /**
     * @Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    eipInstanceId: string | undefined;
    /**
     * @Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
     */
    imageRegistryCredential: string[] | undefined;
    /**
     * @Property resourceGroupId: Resource group.
     */
    resourceGroupId: string | undefined;
    /**
     * Create a new `ALIYUN::ECI::ImageCache`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageCacheProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
