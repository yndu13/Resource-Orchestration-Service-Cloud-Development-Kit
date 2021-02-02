package com.aliyun.ros.cdk.ga;

/**
 * A ROS resource type:  `ALIYUN::GA::IpSets`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.988Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.IpSets")
public class IpSets extends com.aliyun.ros.cdk.core.Resource {

    protected IpSets(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected IpSets(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::GA::IpSets`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public IpSets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.IpSetsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::GA::IpSets`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public IpSets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.IpSetsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccelerateRegionIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAccelerateRegionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpSetIds() {
        return software.amazon.jsii.Kernel.get(this, "attrIpSetIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpVersions() {
        return software.amazon.jsii.Kernel.get(this, "attrIpVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.IpSets}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.IpSets> {
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
        private final com.aliyun.ros.cdk.ga.IpSetsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.IpSetsProps.Builder();
        }

        /**
         * @return {@code this}
         * @param accelerateRegion This parameter is required.
         */
        public Builder accelerateRegion(final com.aliyun.ros.cdk.core.IResolvable accelerateRegion) {
            this.props.accelerateRegion(accelerateRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param accelerateRegion This parameter is required.
         */
        public Builder accelerateRegion(final java.util.List<? extends java.lang.Object> accelerateRegion) {
            this.props.accelerateRegion(accelerateRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ga.IpSets}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.IpSets build() {
            return new com.aliyun.ros.cdk.ga.IpSets(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}