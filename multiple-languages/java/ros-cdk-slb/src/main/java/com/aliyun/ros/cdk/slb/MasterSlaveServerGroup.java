package com.aliyun.ros.cdk.slb;

/**
 * A ROS resource type:  `ALIYUN::SLB::MasterSlaveServerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.562Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.MasterSlaveServerGroup")
public class MasterSlaveServerGroup extends com.aliyun.ros.cdk.core.Resource {

    protected MasterSlaveServerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MasterSlaveServerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public MasterSlaveServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.MasterSlaveServerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public MasterSlaveServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.MasterSlaveServerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterSlaveServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterSlaveServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.MasterSlaveServerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.MasterSlaveServerGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.slb.MasterSlaveServerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.MasterSlaveServerGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterSlaveBackendServers This parameter is required.
         */
        public Builder masterSlaveBackendServers(final com.aliyun.ros.cdk.core.IResolvable masterSlaveBackendServers) {
            this.props.masterSlaveBackendServers(masterSlaveBackendServers);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterSlaveBackendServers This parameter is required.
         */
        public Builder masterSlaveBackendServers(final java.util.List<? extends java.lang.Object> masterSlaveBackendServers) {
            this.props.masterSlaveBackendServers(masterSlaveBackendServers);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterSlaveServerGroupName This parameter is required.
         */
        public Builder masterSlaveServerGroupName(final java.lang.String masterSlaveServerGroupName) {
            this.props.masterSlaveServerGroupName(masterSlaveServerGroupName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.slb.MasterSlaveServerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.MasterSlaveServerGroup build() {
            return new com.aliyun.ros.cdk.slb.MasterSlaveServerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}