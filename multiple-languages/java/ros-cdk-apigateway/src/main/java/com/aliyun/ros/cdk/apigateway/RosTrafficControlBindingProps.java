package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::TrafficControlBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.196Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosTrafficControlBindingProps")
@software.amazon.jsii.Jsii.Proxy(RosTrafficControlBindingProps.Jsii$Proxy.class)
public interface RosTrafficControlBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getStageName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTrafficControlId();

    /**
     * @return a {@link Builder} of {@link RosTrafficControlBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrafficControlBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrafficControlBindingProps> {
        private java.lang.Object apiIds;
        private java.lang.String groupId;
        private java.lang.String stageName;
        private java.lang.String trafficControlId;

        /**
         * Sets the value of {@link RosTrafficControlBindingProps#getApiIds}
         * @param apiIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(java.util.List<? extends java.lang.Object> apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficControlBindingProps#getApiIds}
         * @param apiIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(com.aliyun.ros.cdk.core.IResolvable apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficControlBindingProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficControlBindingProps#getStageName}
         * @param stageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(java.lang.String stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficControlBindingProps#getTrafficControlId}
         * @param trafficControlId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficControlId(java.lang.String trafficControlId) {
            this.trafficControlId = trafficControlId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrafficControlBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrafficControlBindingProps build() {
            return new Jsii$Proxy(apiIds, groupId, stageName, trafficControlId);
        }
    }

    /**
     * An implementation for {@link RosTrafficControlBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrafficControlBindingProps {
        private final java.lang.Object apiIds;
        private final java.lang.String groupId;
        private final java.lang.String stageName;
        private final java.lang.String trafficControlId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiIds = software.amazon.jsii.Kernel.get(this, "apiIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.stageName = software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.trafficControlId = software.amazon.jsii.Kernel.get(this, "trafficControlId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object apiIds, final java.lang.String groupId, final java.lang.String stageName, final java.lang.String trafficControlId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiIds = java.util.Objects.requireNonNull(apiIds, "apiIds is required");
            this.groupId = java.util.Objects.requireNonNull(groupId, "groupId is required");
            this.stageName = java.util.Objects.requireNonNull(stageName, "stageName is required");
            this.trafficControlId = java.util.Objects.requireNonNull(trafficControlId, "trafficControlId is required");
        }

        @Override
        public final java.lang.Object getApiIds() {
            return this.apiIds;
        }

        @Override
        public final java.lang.String getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.String getStageName() {
            return this.stageName;
        }

        @Override
        public final java.lang.String getTrafficControlId() {
            return this.trafficControlId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("apiIds", om.valueToTree(this.getApiIds()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("stageName", om.valueToTree(this.getStageName()));
            data.set("trafficControlId", om.valueToTree(this.getTrafficControlId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosTrafficControlBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrafficControlBindingProps.Jsii$Proxy that = (RosTrafficControlBindingProps.Jsii$Proxy) o;

            if (!apiIds.equals(that.apiIds)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!stageName.equals(that.stageName)) return false;
            return this.trafficControlId.equals(that.trafficControlId);
        }

        @Override
        public final int hashCode() {
            int result = this.apiIds.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.stageName.hashCode());
            result = 31 * result + (this.trafficControlId.hashCode());
            return result;
        }
    }
}