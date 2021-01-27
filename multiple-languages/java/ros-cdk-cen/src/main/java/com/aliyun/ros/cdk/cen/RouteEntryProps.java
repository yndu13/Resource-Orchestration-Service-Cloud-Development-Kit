package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::RouteEntry`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.281Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RouteEntryProps")
@software.amazon.jsii.Jsii.Proxy(RouteEntryProps.Jsii$Proxy.class)
public interface RouteEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getChildInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getChildInstanceRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getChildInstanceRouteTableId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getChildInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDestinationCidrBlock();

    /**
     * @return a {@link Builder} of {@link RouteEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RouteEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RouteEntryProps> {
        private java.lang.String cenId;
        private java.lang.String childInstanceId;
        private java.lang.String childInstanceRegionId;
        private java.lang.String childInstanceRouteTableId;
        private java.lang.String childInstanceType;
        private java.lang.String destinationCidrBlock;

        /**
         * Sets the value of {@link RouteEntryProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceId}
         * @param childInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceId(java.lang.String childInstanceId) {
            this.childInstanceId = childInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceRegionId}
         * @param childInstanceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceRegionId(java.lang.String childInstanceRegionId) {
            this.childInstanceRegionId = childInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceRouteTableId}
         * @param childInstanceRouteTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceRouteTableId(java.lang.String childInstanceRouteTableId) {
            this.childInstanceRouteTableId = childInstanceRouteTableId;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getChildInstanceType}
         * @param childInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder childInstanceType(java.lang.String childInstanceType) {
            this.childInstanceType = childInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RouteEntryProps#getDestinationCidrBlock}
         * @param destinationCidrBlock the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationCidrBlock(java.lang.String destinationCidrBlock) {
            this.destinationCidrBlock = destinationCidrBlock;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouteEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouteEntryProps build() {
            return new Jsii$Proxy(cenId, childInstanceId, childInstanceRegionId, childInstanceRouteTableId, childInstanceType, destinationCidrBlock);
        }
    }

    /**
     * An implementation for {@link RouteEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteEntryProps {
        private final java.lang.String cenId;
        private final java.lang.String childInstanceId;
        private final java.lang.String childInstanceRegionId;
        private final java.lang.String childInstanceRouteTableId;
        private final java.lang.String childInstanceType;
        private final java.lang.String destinationCidrBlock;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.childInstanceId = software.amazon.jsii.Kernel.get(this, "childInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.childInstanceRegionId = software.amazon.jsii.Kernel.get(this, "childInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.childInstanceRouteTableId = software.amazon.jsii.Kernel.get(this, "childInstanceRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.childInstanceType = software.amazon.jsii.Kernel.get(this, "childInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationCidrBlock = software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String cenId, final java.lang.String childInstanceId, final java.lang.String childInstanceRegionId, final java.lang.String childInstanceRouteTableId, final java.lang.String childInstanceType, final java.lang.String destinationCidrBlock) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(cenId, "cenId is required");
            this.childInstanceId = java.util.Objects.requireNonNull(childInstanceId, "childInstanceId is required");
            this.childInstanceRegionId = java.util.Objects.requireNonNull(childInstanceRegionId, "childInstanceRegionId is required");
            this.childInstanceRouteTableId = java.util.Objects.requireNonNull(childInstanceRouteTableId, "childInstanceRouteTableId is required");
            this.childInstanceType = java.util.Objects.requireNonNull(childInstanceType, "childInstanceType is required");
            this.destinationCidrBlock = java.util.Objects.requireNonNull(destinationCidrBlock, "destinationCidrBlock is required");
        }

        @Override
        public final java.lang.String getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.String getChildInstanceId() {
            return this.childInstanceId;
        }

        @Override
        public final java.lang.String getChildInstanceRegionId() {
            return this.childInstanceRegionId;
        }

        @Override
        public final java.lang.String getChildInstanceRouteTableId() {
            return this.childInstanceRouteTableId;
        }

        @Override
        public final java.lang.String getChildInstanceType() {
            return this.childInstanceType;
        }

        @Override
        public final java.lang.String getDestinationCidrBlock() {
            return this.destinationCidrBlock;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("childInstanceId", om.valueToTree(this.getChildInstanceId()));
            data.set("childInstanceRegionId", om.valueToTree(this.getChildInstanceRegionId()));
            data.set("childInstanceRouteTableId", om.valueToTree(this.getChildInstanceRouteTableId()));
            data.set("childInstanceType", om.valueToTree(this.getChildInstanceType()));
            data.set("destinationCidrBlock", om.valueToTree(this.getDestinationCidrBlock()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RouteEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RouteEntryProps.Jsii$Proxy that = (RouteEntryProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!childInstanceId.equals(that.childInstanceId)) return false;
            if (!childInstanceRegionId.equals(that.childInstanceRegionId)) return false;
            if (!childInstanceRouteTableId.equals(that.childInstanceRouteTableId)) return false;
            if (!childInstanceType.equals(that.childInstanceType)) return false;
            return this.destinationCidrBlock.equals(that.destinationCidrBlock);
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.childInstanceId.hashCode());
            result = 31 * result + (this.childInstanceRegionId.hashCode());
            result = 31 * result + (this.childInstanceRouteTableId.hashCode());
            result = 31 * result + (this.childInstanceType.hashCode());
            result = 31 * result + (this.destinationCidrBlock.hashCode());
            return result;
        }
    }
}