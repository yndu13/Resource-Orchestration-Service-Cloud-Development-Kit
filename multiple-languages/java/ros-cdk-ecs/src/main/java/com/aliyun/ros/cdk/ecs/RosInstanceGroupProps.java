package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::InstanceGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.726Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceGroupProps.Jsii$Proxy.class)
public interface RosInstanceGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getImageId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getMaxAmount();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoReleaseTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDedicatedHostId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDeploymentSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskMappings() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEniMappings() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHostName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHpcClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInstanceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInternetChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getInternetMaxBandwidthIn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIoOptimized() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getIpv6AddressCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getKeyPairName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLaunchTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLaunchTemplateName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLaunchTemplateVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPrivateIpAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRamRoleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityEnhancementStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSpotPriceLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSpotStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSystemDiskAutoSnapshotPolicyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSystemDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSystemDiskDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSystemDiskDiskName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSystemDiskPerformanceLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getSystemDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getUserData() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceGroupProps> {
        private java.lang.String imageId;
        private java.lang.String instanceType;
        private java.lang.Number maxAmount;
        private java.lang.Object allocatePublicIp;
        private java.lang.String autoReleaseTime;
        private java.lang.String autoRenew;
        private java.lang.Number autoRenewPeriod;
        private java.lang.String dedicatedHostId;
        private java.lang.Object deletionProtection;
        private java.lang.String deploymentSetId;
        private java.lang.String description;
        private java.lang.Object diskMappings;
        private java.lang.Object eniMappings;
        private java.lang.String hostName;
        private java.lang.String hpcClusterId;
        private java.lang.String instanceChargeType;
        private java.lang.String instanceName;
        private java.lang.String internetChargeType;
        private java.lang.Number internetMaxBandwidthIn;
        private java.lang.Number internetMaxBandwidthOut;
        private java.lang.String ioOptimized;
        private java.lang.Number ipv6AddressCount;
        private java.lang.Object ipv6Addresses;
        private java.lang.String keyPairName;
        private java.lang.String launchTemplateId;
        private java.lang.String launchTemplateName;
        private java.lang.String launchTemplateVersion;
        private java.lang.String networkType;
        private java.lang.String password;
        private java.lang.Object passwordInherit;
        private java.lang.Number period;
        private java.lang.String periodUnit;
        private java.lang.String privateIpAddress;
        private java.lang.String ramRoleName;
        private java.lang.String resourceGroupId;
        private java.lang.String securityEnhancementStrategy;
        private java.lang.String securityGroupId;
        private java.lang.Object securityGroupIds;
        private java.lang.String spotPriceLimit;
        private java.lang.String spotStrategy;
        private java.lang.String systemDiskAutoSnapshotPolicyId;
        private java.lang.String systemDiskCategory;
        private java.lang.String systemDiskDescription;
        private java.lang.String systemDiskDiskName;
        private java.lang.String systemDiskPerformanceLevel;
        private java.lang.Number systemDiskSize;
        private java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private java.lang.String userData;
        private java.lang.String vpcId;
        private java.lang.String vSwitchId;
        private java.lang.String zoneId;

        /**
         * Sets the value of {@link RosInstanceGroupProps#getImageId}
         * @param imageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getMaxAmount}
         * @param maxAmount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder maxAmount(java.lang.Number maxAmount) {
            this.maxAmount = maxAmount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAllocatePublicIp}
         * @param allocatePublicIp the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicIp(java.lang.Boolean allocatePublicIp) {
            this.allocatePublicIp = allocatePublicIp;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAllocatePublicIp}
         * @param allocatePublicIp the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicIp(com.aliyun.ros.cdk.core.IResolvable allocatePublicIp) {
            this.allocatePublicIp = allocatePublicIp;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAutoReleaseTime}
         * @param autoReleaseTime the value to be set.
         * @return {@code this}
         */
        public Builder autoReleaseTime(java.lang.String autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.String autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDedicatedHostId}
         * @param dedicatedHostId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostId(java.lang.String dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeploymentSetId}
         * @param deploymentSetId the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetId(java.lang.String deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDiskMappings}
         * @param diskMappings the value to be set.
         * @return {@code this}
         */
        public Builder diskMappings(com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDiskMappings}
         * @param diskMappings the value to be set.
         * @return {@code this}
         */
        public Builder diskMappings(java.util.List<? extends java.lang.Object> diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getEniMappings}
         * @param eniMappings the value to be set.
         * @return {@code this}
         */
        public Builder eniMappings(com.aliyun.ros.cdk.core.IResolvable eniMappings) {
            this.eniMappings = eniMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getEniMappings}
         * @param eniMappings the value to be set.
         * @return {@code this}
         */
        public Builder eniMappings(java.util.List<? extends java.lang.Object> eniMappings) {
            this.eniMappings = eniMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHpcClusterId}
         * @param hpcClusterId the value to be set.
         * @return {@code this}
         */
        public Builder hpcClusterId(java.lang.String hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.String ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIpv6Addresses}
         * @param ipv6Addresses the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Addresses(java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIpv6Addresses}
         * @param ipv6Addresses the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Addresses(com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getLaunchTemplateId}
         * @param launchTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getLaunchTemplateName}
         * @param launchTemplateName the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateName(java.lang.String launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(java.lang.String launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(java.lang.Boolean passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy the value to be set.
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(java.lang.String securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.String spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskDescription}
         * @param systemDiskDescription the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskDiskName}
         * @param systemDiskDiskName the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(java.lang.String systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceGroupProps build() {
            return new Jsii$Proxy(imageId, instanceType, maxAmount, allocatePublicIp, autoReleaseTime, autoRenew, autoRenewPeriod, dedicatedHostId, deletionProtection, deploymentSetId, description, diskMappings, eniMappings, hostName, hpcClusterId, instanceChargeType, instanceName, internetChargeType, internetMaxBandwidthIn, internetMaxBandwidthOut, ioOptimized, ipv6AddressCount, ipv6Addresses, keyPairName, launchTemplateId, launchTemplateName, launchTemplateVersion, networkType, password, passwordInherit, period, periodUnit, privateIpAddress, ramRoleName, resourceGroupId, securityEnhancementStrategy, securityGroupId, securityGroupIds, spotPriceLimit, spotStrategy, systemDiskAutoSnapshotPolicyId, systemDiskCategory, systemDiskDescription, systemDiskDiskName, systemDiskPerformanceLevel, systemDiskSize, tags, userData, vpcId, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link RosInstanceGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceGroupProps {
        private final java.lang.String imageId;
        private final java.lang.String instanceType;
        private final java.lang.Number maxAmount;
        private final java.lang.Object allocatePublicIp;
        private final java.lang.String autoReleaseTime;
        private final java.lang.String autoRenew;
        private final java.lang.Number autoRenewPeriod;
        private final java.lang.String dedicatedHostId;
        private final java.lang.Object deletionProtection;
        private final java.lang.String deploymentSetId;
        private final java.lang.String description;
        private final java.lang.Object diskMappings;
        private final java.lang.Object eniMappings;
        private final java.lang.String hostName;
        private final java.lang.String hpcClusterId;
        private final java.lang.String instanceChargeType;
        private final java.lang.String instanceName;
        private final java.lang.String internetChargeType;
        private final java.lang.Number internetMaxBandwidthIn;
        private final java.lang.Number internetMaxBandwidthOut;
        private final java.lang.String ioOptimized;
        private final java.lang.Number ipv6AddressCount;
        private final java.lang.Object ipv6Addresses;
        private final java.lang.String keyPairName;
        private final java.lang.String launchTemplateId;
        private final java.lang.String launchTemplateName;
        private final java.lang.String launchTemplateVersion;
        private final java.lang.String networkType;
        private final java.lang.String password;
        private final java.lang.Object passwordInherit;
        private final java.lang.Number period;
        private final java.lang.String periodUnit;
        private final java.lang.String privateIpAddress;
        private final java.lang.String ramRoleName;
        private final java.lang.String resourceGroupId;
        private final java.lang.String securityEnhancementStrategy;
        private final java.lang.String securityGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.lang.String spotPriceLimit;
        private final java.lang.String spotStrategy;
        private final java.lang.String systemDiskAutoSnapshotPolicyId;
        private final java.lang.String systemDiskCategory;
        private final java.lang.String systemDiskDescription;
        private final java.lang.String systemDiskDiskName;
        private final java.lang.String systemDiskPerformanceLevel;
        private final java.lang.Number systemDiskSize;
        private final java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private final java.lang.String userData;
        private final java.lang.String vpcId;
        private final java.lang.String vSwitchId;
        private final java.lang.String zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.maxAmount = software.amazon.jsii.Kernel.get(this, "maxAmount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.allocatePublicIp = software.amazon.jsii.Kernel.get(this, "allocatePublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoReleaseTime = software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.dedicatedHostId = software.amazon.jsii.Kernel.get(this, "dedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eniMappings = software.amazon.jsii.Kernel.get(this, "eniMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.hpcClusterId = software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.ipv6Addresses = software.amazon.jsii.Kernel.get(this, "ipv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.launchTemplateName = software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.launchTemplateVersion = software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityEnhancementStrategy = software.amazon.jsii.Kernel.get(this, "securityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.systemDiskAutoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "systemDiskAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.systemDiskDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosTag.class)));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String imageId, final java.lang.String instanceType, final java.lang.Number maxAmount, final java.lang.Object allocatePublicIp, final java.lang.String autoReleaseTime, final java.lang.String autoRenew, final java.lang.Number autoRenewPeriod, final java.lang.String dedicatedHostId, final java.lang.Object deletionProtection, final java.lang.String deploymentSetId, final java.lang.String description, final java.lang.Object diskMappings, final java.lang.Object eniMappings, final java.lang.String hostName, final java.lang.String hpcClusterId, final java.lang.String instanceChargeType, final java.lang.String instanceName, final java.lang.String internetChargeType, final java.lang.Number internetMaxBandwidthIn, final java.lang.Number internetMaxBandwidthOut, final java.lang.String ioOptimized, final java.lang.Number ipv6AddressCount, final java.lang.Object ipv6Addresses, final java.lang.String keyPairName, final java.lang.String launchTemplateId, final java.lang.String launchTemplateName, final java.lang.String launchTemplateVersion, final java.lang.String networkType, final java.lang.String password, final java.lang.Object passwordInherit, final java.lang.Number period, final java.lang.String periodUnit, final java.lang.String privateIpAddress, final java.lang.String ramRoleName, final java.lang.String resourceGroupId, final java.lang.String securityEnhancementStrategy, final java.lang.String securityGroupId, final java.lang.Object securityGroupIds, final java.lang.String spotPriceLimit, final java.lang.String spotStrategy, final java.lang.String systemDiskAutoSnapshotPolicyId, final java.lang.String systemDiskCategory, final java.lang.String systemDiskDescription, final java.lang.String systemDiskDiskName, final java.lang.String systemDiskPerformanceLevel, final java.lang.Number systemDiskSize, final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags, final java.lang.String userData, final java.lang.String vpcId, final java.lang.String vSwitchId, final java.lang.String zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageId = java.util.Objects.requireNonNull(imageId, "imageId is required");
            this.instanceType = java.util.Objects.requireNonNull(instanceType, "instanceType is required");
            this.maxAmount = java.util.Objects.requireNonNull(maxAmount, "maxAmount is required");
            this.allocatePublicIp = allocatePublicIp;
            this.autoReleaseTime = autoReleaseTime;
            this.autoRenew = autoRenew;
            this.autoRenewPeriod = autoRenewPeriod;
            this.dedicatedHostId = dedicatedHostId;
            this.deletionProtection = deletionProtection;
            this.deploymentSetId = deploymentSetId;
            this.description = description;
            this.diskMappings = diskMappings;
            this.eniMappings = eniMappings;
            this.hostName = hostName;
            this.hpcClusterId = hpcClusterId;
            this.instanceChargeType = instanceChargeType;
            this.instanceName = instanceName;
            this.internetChargeType = internetChargeType;
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            this.ioOptimized = ioOptimized;
            this.ipv6AddressCount = ipv6AddressCount;
            this.ipv6Addresses = ipv6Addresses;
            this.keyPairName = keyPairName;
            this.launchTemplateId = launchTemplateId;
            this.launchTemplateName = launchTemplateName;
            this.launchTemplateVersion = launchTemplateVersion;
            this.networkType = networkType;
            this.password = password;
            this.passwordInherit = passwordInherit;
            this.period = period;
            this.periodUnit = periodUnit;
            this.privateIpAddress = privateIpAddress;
            this.ramRoleName = ramRoleName;
            this.resourceGroupId = resourceGroupId;
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            this.securityGroupId = securityGroupId;
            this.securityGroupIds = securityGroupIds;
            this.spotPriceLimit = spotPriceLimit;
            this.spotStrategy = spotStrategy;
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            this.systemDiskCategory = systemDiskCategory;
            this.systemDiskDescription = systemDiskDescription;
            this.systemDiskDiskName = systemDiskDiskName;
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            this.systemDiskSize = systemDiskSize;
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            this.userData = userData;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.String getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.String getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Number getMaxAmount() {
            return this.maxAmount;
        }

        @Override
        public final java.lang.Object getAllocatePublicIp() {
            return this.allocatePublicIp;
        }

        @Override
        public final java.lang.String getAutoReleaseTime() {
            return this.autoReleaseTime;
        }

        @Override
        public final java.lang.String getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Number getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.String getDedicatedHostId() {
            return this.dedicatedHostId;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.String getDeploymentSetId() {
            return this.deploymentSetId;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskMappings() {
            return this.diskMappings;
        }

        @Override
        public final java.lang.Object getEniMappings() {
            return this.eniMappings;
        }

        @Override
        public final java.lang.String getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.String getHpcClusterId() {
            return this.hpcClusterId;
        }

        @Override
        public final java.lang.String getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.String getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.String getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Number getInternetMaxBandwidthIn() {
            return this.internetMaxBandwidthIn;
        }

        @Override
        public final java.lang.Number getInternetMaxBandwidthOut() {
            return this.internetMaxBandwidthOut;
        }

        @Override
        public final java.lang.String getIoOptimized() {
            return this.ioOptimized;
        }

        @Override
        public final java.lang.Number getIpv6AddressCount() {
            return this.ipv6AddressCount;
        }

        @Override
        public final java.lang.Object getIpv6Addresses() {
            return this.ipv6Addresses;
        }

        @Override
        public final java.lang.String getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.String getLaunchTemplateId() {
            return this.launchTemplateId;
        }

        @Override
        public final java.lang.String getLaunchTemplateName() {
            return this.launchTemplateName;
        }

        @Override
        public final java.lang.String getLaunchTemplateVersion() {
            return this.launchTemplateVersion;
        }

        @Override
        public final java.lang.String getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.String getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPasswordInherit() {
            return this.passwordInherit;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.String getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.String getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.String getRamRoleName() {
            return this.ramRoleName;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.String getSecurityEnhancementStrategy() {
            return this.securityEnhancementStrategy;
        }

        @Override
        public final java.lang.String getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        public final java.lang.String getSpotPriceLimit() {
            return this.spotPriceLimit;
        }

        @Override
        public final java.lang.String getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.lang.String getSystemDiskAutoSnapshotPolicyId() {
            return this.systemDiskAutoSnapshotPolicyId;
        }

        @Override
        public final java.lang.String getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        public final java.lang.String getSystemDiskDescription() {
            return this.systemDiskDescription;
        }

        @Override
        public final java.lang.String getSystemDiskDiskName() {
            return this.systemDiskDiskName;
        }

        @Override
        public final java.lang.String getSystemDiskPerformanceLevel() {
            return this.systemDiskPerformanceLevel;
        }

        @Override
        public final java.lang.Number getSystemDiskSize() {
            return this.systemDiskSize;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.String getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.String getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageId", om.valueToTree(this.getImageId()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("maxAmount", om.valueToTree(this.getMaxAmount()));
            if (this.getAllocatePublicIp() != null) {
                data.set("allocatePublicIp", om.valueToTree(this.getAllocatePublicIp()));
            }
            if (this.getAutoReleaseTime() != null) {
                data.set("autoReleaseTime", om.valueToTree(this.getAutoReleaseTime()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getDedicatedHostId() != null) {
                data.set("dedicatedHostId", om.valueToTree(this.getDedicatedHostId()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getDeploymentSetId() != null) {
                data.set("deploymentSetId", om.valueToTree(this.getDeploymentSetId()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskMappings() != null) {
                data.set("diskMappings", om.valueToTree(this.getDiskMappings()));
            }
            if (this.getEniMappings() != null) {
                data.set("eniMappings", om.valueToTree(this.getEniMappings()));
            }
            if (this.getHostName() != null) {
                data.set("hostName", om.valueToTree(this.getHostName()));
            }
            if (this.getHpcClusterId() != null) {
                data.set("hpcClusterId", om.valueToTree(this.getHpcClusterId()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getInternetMaxBandwidthIn() != null) {
                data.set("internetMaxBandwidthIn", om.valueToTree(this.getInternetMaxBandwidthIn()));
            }
            if (this.getInternetMaxBandwidthOut() != null) {
                data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
            }
            if (this.getIpv6AddressCount() != null) {
                data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
            }
            if (this.getIpv6Addresses() != null) {
                data.set("ipv6Addresses", om.valueToTree(this.getIpv6Addresses()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getLaunchTemplateId() != null) {
                data.set("launchTemplateId", om.valueToTree(this.getLaunchTemplateId()));
            }
            if (this.getLaunchTemplateName() != null) {
                data.set("launchTemplateName", om.valueToTree(this.getLaunchTemplateName()));
            }
            if (this.getLaunchTemplateVersion() != null) {
                data.set("launchTemplateVersion", om.valueToTree(this.getLaunchTemplateVersion()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPasswordInherit() != null) {
                data.set("passwordInherit", om.valueToTree(this.getPasswordInherit()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityEnhancementStrategy() != null) {
                data.set("securityEnhancementStrategy", om.valueToTree(this.getSecurityEnhancementStrategy()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupIds() != null) {
                data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
            }
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getSystemDiskAutoSnapshotPolicyId() != null) {
                data.set("systemDiskAutoSnapshotPolicyId", om.valueToTree(this.getSystemDiskAutoSnapshotPolicyId()));
            }
            if (this.getSystemDiskCategory() != null) {
                data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            }
            if (this.getSystemDiskDescription() != null) {
                data.set("systemDiskDescription", om.valueToTree(this.getSystemDiskDescription()));
            }
            if (this.getSystemDiskDiskName() != null) {
                data.set("systemDiskDiskName", om.valueToTree(this.getSystemDiskDiskName()));
            }
            if (this.getSystemDiskPerformanceLevel() != null) {
                data.set("systemDiskPerformanceLevel", om.valueToTree(this.getSystemDiskPerformanceLevel()));
            }
            if (this.getSystemDiskSize() != null) {
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceGroupProps.Jsii$Proxy that = (RosInstanceGroupProps.Jsii$Proxy) o;

            if (!imageId.equals(that.imageId)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!maxAmount.equals(that.maxAmount)) return false;
            if (this.allocatePublicIp != null ? !this.allocatePublicIp.equals(that.allocatePublicIp) : that.allocatePublicIp != null) return false;
            if (this.autoReleaseTime != null ? !this.autoReleaseTime.equals(that.autoReleaseTime) : that.autoReleaseTime != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.dedicatedHostId != null ? !this.dedicatedHostId.equals(that.dedicatedHostId) : that.dedicatedHostId != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.deploymentSetId != null ? !this.deploymentSetId.equals(that.deploymentSetId) : that.deploymentSetId != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.eniMappings != null ? !this.eniMappings.equals(that.eniMappings) : that.eniMappings != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.hpcClusterId != null ? !this.hpcClusterId.equals(that.hpcClusterId) : that.hpcClusterId != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.ipv6Addresses != null ? !this.ipv6Addresses.equals(that.ipv6Addresses) : that.ipv6Addresses != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateName != null ? !this.launchTemplateName.equals(that.launchTemplateName) : that.launchTemplateName != null) return false;
            if (this.launchTemplateVersion != null ? !this.launchTemplateVersion.equals(that.launchTemplateVersion) : that.launchTemplateVersion != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityEnhancementStrategy != null ? !this.securityEnhancementStrategy.equals(that.securityEnhancementStrategy) : that.securityEnhancementStrategy != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.systemDiskAutoSnapshotPolicyId != null ? !this.systemDiskAutoSnapshotPolicyId.equals(that.systemDiskAutoSnapshotPolicyId) : that.systemDiskAutoSnapshotPolicyId != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
            if (this.systemDiskDiskName != null ? !this.systemDiskDiskName.equals(that.systemDiskDiskName) : that.systemDiskDiskName != null) return false;
            if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
            if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageId.hashCode();
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.maxAmount.hashCode());
            result = 31 * result + (this.allocatePublicIp != null ? this.allocatePublicIp.hashCode() : 0);
            result = 31 * result + (this.autoReleaseTime != null ? this.autoReleaseTime.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostId != null ? this.dedicatedHostId.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.deploymentSetId != null ? this.deploymentSetId.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.eniMappings != null ? this.eniMappings.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.hpcClusterId != null ? this.hpcClusterId.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.ipv6Addresses != null ? this.ipv6Addresses.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateName != null ? this.launchTemplateName.hashCode() : 0);
            result = 31 * result + (this.launchTemplateVersion != null ? this.launchTemplateVersion.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityEnhancementStrategy != null ? this.securityEnhancementStrategy.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.systemDiskAutoSnapshotPolicyId != null ? this.systemDiskAutoSnapshotPolicyId.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
            result = 31 * result + (this.systemDiskDiskName != null ? this.systemDiskDiskName.hashCode() : 0);
            result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}