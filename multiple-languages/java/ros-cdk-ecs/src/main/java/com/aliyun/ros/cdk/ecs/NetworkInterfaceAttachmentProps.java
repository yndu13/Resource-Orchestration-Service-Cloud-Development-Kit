package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.688Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.NetworkInterfaceAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(NetworkInterfaceAttachmentProps.Jsii$Proxy.class)
public interface NetworkInterfaceAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getNetworkInterfaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTrunkNetworkInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkInterfaceAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkInterfaceAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkInterfaceAttachmentProps> {
        private java.lang.String instanceId;
        private java.lang.String networkInterfaceId;
        private java.lang.String trunkNetworkInstanceId;

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getNetworkInterfaceId}
         * @param networkInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getTrunkNetworkInstanceId}
         * @param trunkNetworkInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder trunkNetworkInstanceId(java.lang.String trunkNetworkInstanceId) {
            this.trunkNetworkInstanceId = trunkNetworkInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkInterfaceAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkInterfaceAttachmentProps build() {
            return new Jsii$Proxy(instanceId, networkInterfaceId, trunkNetworkInstanceId);
        }
    }

    /**
     * An implementation for {@link NetworkInterfaceAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkInterfaceAttachmentProps {
        private final java.lang.String instanceId;
        private final java.lang.String networkInterfaceId;
        private final java.lang.String trunkNetworkInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.trunkNetworkInstanceId = software.amazon.jsii.Kernel.get(this, "trunkNetworkInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String instanceId, final java.lang.String networkInterfaceId, final java.lang.String trunkNetworkInstanceId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.networkInterfaceId = java.util.Objects.requireNonNull(networkInterfaceId, "networkInterfaceId is required");
            this.trunkNetworkInstanceId = trunkNetworkInstanceId;
        }

        @Override
        public final java.lang.String getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.String getNetworkInterfaceId() {
            return this.networkInterfaceId;
        }

        @Override
        public final java.lang.String getTrunkNetworkInstanceId() {
            return this.trunkNetworkInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("networkInterfaceId", om.valueToTree(this.getNetworkInterfaceId()));
            if (this.getTrunkNetworkInstanceId() != null) {
                data.set("trunkNetworkInstanceId", om.valueToTree(this.getTrunkNetworkInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.NetworkInterfaceAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkInterfaceAttachmentProps.Jsii$Proxy that = (NetworkInterfaceAttachmentProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!networkInterfaceId.equals(that.networkInterfaceId)) return false;
            return this.trunkNetworkInstanceId != null ? this.trunkNetworkInstanceId.equals(that.trunkNetworkInstanceId) : that.trunkNetworkInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.networkInterfaceId.hashCode());
            result = 31 * result + (this.trunkNetworkInstanceId != null ? this.trunkNetworkInstanceId.hashCode() : 0);
            return result;
        }
    }
}