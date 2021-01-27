#!/usr/bin/env python3

from ros_cdk_core import *

from %name.PythonModule%.%name.PythonModule%_stack import %name.PascalCased%Stack


app = App()

%name.PascalCased%Stack(app, "%name.StackName%")

app.synth()
