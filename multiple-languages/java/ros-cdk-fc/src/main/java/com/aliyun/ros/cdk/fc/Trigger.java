package com.aliyun.ros.cdk.fc;

/**
 * A ROS resource type:  `ALIYUN::FC::Trigger`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.966Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.Trigger")
public class Trigger extends com.aliyun.ros.cdk.core.Resource {

    protected Trigger(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Trigger(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::FC::Trigger`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Trigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.TriggerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::FC::Trigger`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Trigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.TriggerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFunctionName() {
        return software.amazon.jsii.Kernel.get(this, "attrFunctionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerId() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerName() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.Trigger}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.Trigger> {
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
        private final com.aliyun.ros.cdk.fc.TriggerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.TriggerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param functionName This parameter is required.
         */
        public Builder functionName(final java.lang.String functionName) {
            this.props.functionName(functionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceName This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param triggerConfig This parameter is required.
         */
        public Builder triggerConfig(final com.aliyun.ros.cdk.core.IResolvable triggerConfig) {
            this.props.triggerConfig(triggerConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param triggerConfig This parameter is required.
         */
        public Builder triggerConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> triggerConfig) {
            this.props.triggerConfig(triggerConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param triggerName This parameter is required.
         */
        public Builder triggerName(final java.lang.String triggerName) {
            this.props.triggerName(triggerName);
            return this;
        }

        /**
         * @return {@code this}
         * @param triggerType This parameter is required.
         */
        public Builder triggerType(final java.lang.String triggerType) {
            this.props.triggerType(triggerType);
            return this;
        }

        /**
         * @return {@code this}
         * @param invocationRole This parameter is required.
         */
        public Builder invocationRole(final java.lang.String invocationRole) {
            this.props.invocationRole(invocationRole);
            return this;
        }

        /**
         * @return {@code this}
         * @param qualifier This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceArn This parameter is required.
         */
        public Builder sourceArn(final java.lang.String sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.fc.Trigger}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.Trigger build() {
            return new com.aliyun.ros.cdk.fc.Trigger(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}