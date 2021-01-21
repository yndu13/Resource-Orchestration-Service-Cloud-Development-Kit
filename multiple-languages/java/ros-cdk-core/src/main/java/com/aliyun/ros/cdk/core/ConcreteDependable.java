package com.aliyun.ros.cdk.core;

/**
 * (experimental) A set of constructs to be used as a dependable
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:54:59.847Z")
@software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ConcreteDependable")
public class ConcreteDependable extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.core.IDependable {

    protected ConcreteDependable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ConcreteDependable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public ConcreteDependable() {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this);
    }

    /**
     * (experimental) Add a construct to the dependency roots.
     * <p>
     * @param construct This parameter is required.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Experimental)
    public void add(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct construct) {
        software.amazon.jsii.Kernel.call(this, "add", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(construct, "construct is required") });
    }
}