import ifcopenshell
from ifcopenshell.api import run
import numpy

# Create a blank model
model = ifcopenshell.file()

# All projects must have one IFC Project element
project = run("root.create_entity", model, ifc_class="IfcProject", name="My Project")

# Geometry is optional in IFC, but because we want to use geometry in this example, let's define units
# Assigning without arguments defaults to metric units
run("unit.assign_unit", model)

# Let's create a modeling geometry context, so we can store 3D geometry (note: IFC supports 2D too!)
context = run("context.add_context", model, context_type="Model")

# In particular, in this example we want to store the 3D "body" geometry of objects, i.e. the body shape
body = run("context.add_context", model, context_type="Model",
    context_identifier="Body", target_view="MODEL_VIEW", parent=context)

# Create a site, building, and storey. Many hierarchies are possible.
site = run("root.create_entity", model, ifc_class="IfcSite", name="My Site")
building = run("root.create_entity", model, ifc_class="IfcBuilding", name="Building A")
storey = run("root.create_entity", model, ifc_class="IfcBuildingStorey", name="Ground Floor")

# Since the site is our top level location, assign it to the project
# Then place our building on the site, and our storey in the building
run("aggregate.assign_object", model, relating_object=project, product=site)
run("aggregate.assign_object", model, relating_object=site, product=building)
run("aggregate.assign_object", model, relating_object=building, product=storey)

# Let's create a new server
comm = run("root.create_entity", model, ifc_class="IfcBuildingElementProxy",name="ITDD-Server000")

# Add a new body geometry, 60 centimeters x 50 centimeters x 40 centimeters
geom = run("geometry.add_wall_representation", model, context=body, length=0.60, height=0.5, thickness=0.4)

# Assign our new body geometry back to our server
run("geometry.assign_representation", model, product=comm, representation=geom)

# Place our server in the ground floor
run("spatial.assign_container", model, relating_structure=storey, product=comm)

# Write out to a file
model.write("server.ifc")