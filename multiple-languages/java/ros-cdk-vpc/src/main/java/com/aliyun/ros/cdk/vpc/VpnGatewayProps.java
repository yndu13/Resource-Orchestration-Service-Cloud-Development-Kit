package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::VpnGateway`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.711Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnGatewayProps")
@software.amazon.jsii.Jsii.Proxy(VpnGatewayProps.Jsii$Proxy.class)
public interface VpnGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableIpsec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSsl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getSslConnections() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpnGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpnGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpnGatewayProps> {
        private java.lang.Number bandwidth;
        private java.lang.String vpcId;
        private java.lang.Object autoPay;
        private java.lang.String description;
        private java.lang.Object enableIpsec;
        private java.lang.Object enableSsl;
        private java.lang.String instanceChargeType;
        private java.lang.String name;
        private java.lang.Number period;
        private java.lang.Number sslConnections;
        private java.lang.String vSwitchId;

        /**
         * Sets the value of {@link VpnGatewayProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getEnableIpsec}
         * @param enableIpsec the value to be set.
         * @return {@code this}
         */
        public Builder enableIpsec(java.lang.Boolean enableIpsec) {
            this.enableIpsec = enableIpsec;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getEnableIpsec}
         * @param enableIpsec the value to be set.
         * @return {@code this}
         */
        public Builder enableIpsec(com.aliyun.ros.cdk.core.IResolvable enableIpsec) {
            this.enableIpsec = enableIpsec;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getEnableSsl}
         * @param enableSsl the value to be set.
         * @return {@code this}
         */
        public Builder enableSsl(java.lang.Boolean enableSsl) {
            this.enableSsl = enableSsl;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getEnableSsl}
         * @param enableSsl the value to be set.
         * @return {@code this}
         */
        public Builder enableSsl(com.aliyun.ros.cdk.core.IResolvable enableSsl) {
            this.enableSsl = enableSsl;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getSslConnections}
         * @param sslConnections the value to be set.
         * @return {@code this}
         */
        public Builder sslConnections(java.lang.Number sslConnections) {
            this.sslConnections = sslConnections;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpnGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpnGatewayProps build() {
            return new Jsii$Proxy(bandwidth, vpcId, autoPay, description, enableIpsec, enableSsl, instanceChargeType, name, period, sslConnections, vSwitchId);
        }
    }

    /**
     * An implementation for {@link VpnGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpnGatewayProps {
        private final java.lang.Number bandwidth;
        private final java.lang.String vpcId;
        private final java.lang.Object autoPay;
        private final java.lang.String description;
        private final java.lang.Object enableIpsec;
        private final java.lang.Object enableSsl;
        private final java.lang.String instanceChargeType;
        private final java.lang.String name;
        private final java.lang.Number period;
        private final java.lang.Number sslConnections;
        private final java.lang.String vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.enableIpsec = software.amazon.jsii.Kernel.get(this, "enableIpsec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSsl = software.amazon.jsii.Kernel.get(this, "enableSsl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.sslConnections = software.amazon.jsii.Kernel.get(this, "sslConnections", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number bandwidth, final java.lang.String vpcId, final java.lang.Object autoPay, final java.lang.String description, final java.lang.Object enableIpsec, final java.lang.Object enableSsl, final java.lang.String instanceChargeType, final java.lang.String name, final java.lang.Number period, final java.lang.Number sslConnections, final java.lang.String vSwitchId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(bandwidth, "bandwidth is required");
            this.vpcId = java.util.Objects.requireNonNull(vpcId, "vpcId is required");
            this.autoPay = autoPay;
            this.description = description;
            this.enableIpsec = enableIpsec;
            this.enableSsl = enableSsl;
            this.instanceChargeType = instanceChargeType;
            this.name = name;
            this.period = period;
            this.sslConnections = sslConnections;
            this.vSwitchId = vSwitchId;
        }

        @Override
        public final java.lang.Number getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableIpsec() {
            return this.enableIpsec;
        }

        @Override
        public final java.lang.Object getEnableSsl() {
            return this.enableSsl;
        }

        @Override
        public final java.lang.String getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Number getSslConnections() {
            return this.sslConnections;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableIpsec() != null) {
                data.set("enableIpsec", om.valueToTree(this.getEnableIpsec()));
            }
            if (this.getEnableSsl() != null) {
                data.set("enableSsl", om.valueToTree(this.getEnableSsl()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getSslConnections() != null) {
                data.set("sslConnections", om.valueToTree(this.getSslConnections()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.VpnGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpnGatewayProps.Jsii$Proxy that = (VpnGatewayProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableIpsec != null ? !this.enableIpsec.equals(that.enableIpsec) : that.enableIpsec != null) return false;
            if (this.enableSsl != null ? !this.enableSsl.equals(that.enableSsl) : that.enableSsl != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.sslConnections != null ? !this.sslConnections.equals(that.sslConnections) : that.sslConnections != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableIpsec != null ? this.enableIpsec.hashCode() : 0);
            result = 31 * result + (this.enableSsl != null ? this.enableSsl.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.sslConnections != null ? this.sslConnections.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}