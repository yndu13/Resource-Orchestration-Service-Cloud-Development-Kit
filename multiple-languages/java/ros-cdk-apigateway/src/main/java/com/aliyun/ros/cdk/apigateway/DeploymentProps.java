package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::Deployment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.136Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.DeploymentProps")
@software.amazon.jsii.Jsii.Proxy(DeploymentProps.Jsii$Proxy.class)
public interface DeploymentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getApiId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getStageName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHistoryVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DeploymentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DeploymentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DeploymentProps> {
        private java.lang.String apiId;
        private java.lang.String groupId;
        private java.lang.String stageName;
        private java.lang.String description;
        private java.lang.String historyVersion;

        /**
         * Sets the value of {@link DeploymentProps#getApiId}
         * @param apiId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder apiId(java.lang.String apiId) {
            this.apiId = apiId;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getStageName}
         * @param stageName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(java.lang.String stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getHistoryVersion}
         * @param historyVersion the value to be set.
         * @return {@code this}
         */
        public Builder historyVersion(java.lang.String historyVersion) {
            this.historyVersion = historyVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DeploymentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DeploymentProps build() {
            return new Jsii$Proxy(apiId, groupId, stageName, description, historyVersion);
        }
    }

    /**
     * An implementation for {@link DeploymentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeploymentProps {
        private final java.lang.String apiId;
        private final java.lang.String groupId;
        private final java.lang.String stageName;
        private final java.lang.String description;
        private final java.lang.String historyVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiId = software.amazon.jsii.Kernel.get(this, "apiId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.stageName = software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.historyVersion = software.amazon.jsii.Kernel.get(this, "historyVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String apiId, final java.lang.String groupId, final java.lang.String stageName, final java.lang.String description, final java.lang.String historyVersion) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiId = java.util.Objects.requireNonNull(apiId, "apiId is required");
            this.groupId = java.util.Objects.requireNonNull(groupId, "groupId is required");
            this.stageName = java.util.Objects.requireNonNull(stageName, "stageName is required");
            this.description = description;
            this.historyVersion = historyVersion;
        }

        @Override
        public final java.lang.String getApiId() {
            return this.apiId;
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
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getHistoryVersion() {
            return this.historyVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("apiId", om.valueToTree(this.getApiId()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("stageName", om.valueToTree(this.getStageName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getHistoryVersion() != null) {
                data.set("historyVersion", om.valueToTree(this.getHistoryVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.DeploymentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DeploymentProps.Jsii$Proxy that = (DeploymentProps.Jsii$Proxy) o;

            if (!apiId.equals(that.apiId)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!stageName.equals(that.stageName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.historyVersion != null ? this.historyVersion.equals(that.historyVersion) : that.historyVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.apiId.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.stageName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.historyVersion != null ? this.historyVersion.hashCode() : 0);
            return result;
        }
    }
}