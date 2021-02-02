package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a `ALIYUN::SLB::BackendServerAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.565Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosBackendServerAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosBackendServerAttachmentProps.Jsii$Proxy.class)
public interface RosBackendServerAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLoadBalancerId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getBackendServerList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServers() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServerWeightList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBackendServerAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBackendServerAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBackendServerAttachmentProps> {
        private java.lang.String loadBalancerId;
        private java.util.List<java.lang.String> backendServerList;
        private java.lang.Object backendServers;
        private java.lang.Object backendServerWeightList;

        /**
         * Sets the value of {@link RosBackendServerAttachmentProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendServerAttachmentProps#getBackendServerList}
         * @param backendServerList the value to be set.
         * @return {@code this}
         */
        public Builder backendServerList(java.util.List<java.lang.String> backendServerList) {
            this.backendServerList = backendServerList;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendServerAttachmentProps#getBackendServers}
         * @param backendServers the value to be set.
         * @return {@code this}
         */
        public Builder backendServers(com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendServerAttachmentProps#getBackendServers}
         * @param backendServers the value to be set.
         * @return {@code this}
         */
        public Builder backendServers(java.util.List<? extends java.lang.Object> backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendServerAttachmentProps#getBackendServerWeightList}
         * @param backendServerWeightList the value to be set.
         * @return {@code this}
         */
        public Builder backendServerWeightList(java.util.List<? extends java.lang.Object> backendServerWeightList) {
            this.backendServerWeightList = backendServerWeightList;
            return this;
        }

        /**
         * Sets the value of {@link RosBackendServerAttachmentProps#getBackendServerWeightList}
         * @param backendServerWeightList the value to be set.
         * @return {@code this}
         */
        public Builder backendServerWeightList(com.aliyun.ros.cdk.core.IResolvable backendServerWeightList) {
            this.backendServerWeightList = backendServerWeightList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBackendServerAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBackendServerAttachmentProps build() {
            return new Jsii$Proxy(loadBalancerId, backendServerList, backendServers, backendServerWeightList);
        }
    }

    /**
     * An implementation for {@link RosBackendServerAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBackendServerAttachmentProps {
        private final java.lang.String loadBalancerId;
        private final java.util.List<java.lang.String> backendServerList;
        private final java.lang.Object backendServers;
        private final java.lang.Object backendServerWeightList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.backendServerList = software.amazon.jsii.Kernel.get(this, "backendServerList", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.backendServers = software.amazon.jsii.Kernel.get(this, "backendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendServerWeightList = software.amazon.jsii.Kernel.get(this, "backendServerWeightList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String loadBalancerId, final java.util.List<java.lang.String> backendServerList, final java.lang.Object backendServers, final java.lang.Object backendServerWeightList) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.loadBalancerId = java.util.Objects.requireNonNull(loadBalancerId, "loadBalancerId is required");
            this.backendServerList = backendServerList;
            this.backendServers = backendServers;
            this.backendServerWeightList = backendServerWeightList;
        }

        @Override
        public final java.lang.String getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.util.List<java.lang.String> getBackendServerList() {
            return this.backendServerList;
        }

        @Override
        public final java.lang.Object getBackendServers() {
            return this.backendServers;
        }

        @Override
        public final java.lang.Object getBackendServerWeightList() {
            return this.backendServerWeightList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            if (this.getBackendServerList() != null) {
                data.set("backendServerList", om.valueToTree(this.getBackendServerList()));
            }
            if (this.getBackendServers() != null) {
                data.set("backendServers", om.valueToTree(this.getBackendServers()));
            }
            if (this.getBackendServerWeightList() != null) {
                data.set("backendServerWeightList", om.valueToTree(this.getBackendServerWeightList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosBackendServerAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBackendServerAttachmentProps.Jsii$Proxy that = (RosBackendServerAttachmentProps.Jsii$Proxy) o;

            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (this.backendServerList != null ? !this.backendServerList.equals(that.backendServerList) : that.backendServerList != null) return false;
            if (this.backendServers != null ? !this.backendServers.equals(that.backendServers) : that.backendServers != null) return false;
            return this.backendServerWeightList != null ? this.backendServerWeightList.equals(that.backendServerWeightList) : that.backendServerWeightList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.loadBalancerId.hashCode();
            result = 31 * result + (this.backendServerList != null ? this.backendServerList.hashCode() : 0);
            result = 31 * result + (this.backendServers != null ? this.backendServers.hashCode() : 0);
            result = 31 * result + (this.backendServerWeightList != null ? this.backendServerWeightList.hashCode() : 0);
            return result;
        }
    }
}