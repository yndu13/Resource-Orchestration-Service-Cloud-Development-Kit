package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS template type:  `ALIYUN::ApiGateway::Signature`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.183Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosSignature")
public class RosSignature extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSignature(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSignature(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apigateway.RosSignature.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ApiGateway::Signature`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSignature(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.RosSignatureProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignatureId() {
        return software.amazon.jsii.Kernel.get(this, "attrSignatureId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSignatureKey() {
        return software.amazon.jsii.Kernel.get(this, "signatureKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSignatureKey(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "signatureKey", java.util.Objects.requireNonNull(value, "signatureKey is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSignatureName() {
        return software.amazon.jsii.Kernel.get(this, "signatureName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSignatureName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "signatureName", java.util.Objects.requireNonNull(value, "signatureName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSignatureSecret() {
        return software.amazon.jsii.Kernel.get(this, "signatureSecret", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSignatureSecret(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "signatureSecret", java.util.Objects.requireNonNull(value, "signatureSecret is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.RosSignature}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.RosSignature> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.apigateway.RosSignatureProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.RosSignatureProps.Builder();
        }

        /**
         * @return {@code this}
         * @param signatureKey This parameter is required.
         */
        public Builder signatureKey(final java.lang.String signatureKey) {
            this.props.signatureKey(signatureKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param signatureName This parameter is required.
         */
        public Builder signatureName(final java.lang.String signatureName) {
            this.props.signatureName(signatureName);
            return this;
        }

        /**
         * @return {@code this}
         * @param signatureSecret This parameter is required.
         */
        public Builder signatureSecret(final java.lang.String signatureSecret) {
            this.props.signatureSecret(signatureSecret);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.apigateway.RosSignature}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.RosSignature build() {
            return new com.aliyun.ros.cdk.apigateway.RosSignature(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}