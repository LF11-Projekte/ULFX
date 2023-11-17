# Tutorial zur Verarbeitung von Gebäudedaten mit den Industrial Foundation Classes[^1][^2]

Die Industrial Foundation Classes (IFC) sind ein internationaler Standard zur elektronischen Darstellung von Gebäude- bzw. Baudaten (engl. Building Information Modeling (BIM)), der seit ca. 20 Jahren immer weiter entwickelt wird. Die aktuelle Version ist IFC4.3 aus dem Jahr 2021. Kernidee dieses Standards ist die Einteilung von bestimmten Gebäudeteilen in konkrete Funktionsklassen (deshalb auch das Wort **classes**). Diese Gebäudeteile werden auch als Objekte abstrahiert, was die Zuordnung bestimmter klasseneigener Eigenschaften (Elemente) zulässt.

![](/figures/ug.png){ align=center }

Das Modell des Hauses[^3] als Basis für die geplante IT-Installation.

!!! note "Beispiel"
    Eine Tür ist ein Objekt der Klasse **IfcDoor** und hat bestimmte Eigenschaften wie Abmaße, Dimension und Material. Eine weitere ähnliche Tür kann durch das Erzeugen eines weiteren Objektes **IfcDoor** und das Kopieren der Eigenschaften erzeugt werden.  

Dieser Objektansatz erlaubt das einfache Verschieben, Ändern, Duplizieren von Gebäudeteilen innerhalb des Gesamtmodells. Ebenso können Objekte in Beziehungen stehen. Zur Darstellung der Beziehungen sind Hierarchiediagramme sinnvoll.

!!! info inline end "10 min"

!!! question "Aufgabe 1 - Eigenschaften eines Baumes"
    Lesen Sie das [Arbeitsblatt](/pdf/ab_baum.pdf). Beschreiben Sie folgende Begriffe eines Baums: Knoten, Blatt, Wurzel, Kind, Elternteil, Beziehung zwischen Knoten.
    Definieren Sie den Begriff Baum.

!!! note "Definitionen"
    `Knoten`
    : Der Knoten ist ein Element eines Baumes. Er kann Wurzel, Kind, Elternteil oder ein Blatt sein.
    
    `Blatt`
    : Ein Blatt ist ein Knoten, welches keine Kinder hat. (Unterste Knoten).

    `Wurzel`
    : Die Wurzel ist der Ursprungsknoten/Anfangsknoten, von dem der Baum aufgebaut wird. Dieser hat keine Elternknoten.

    `Kind`
    : Ein Kind ist der Nachfolger eines bestimmten Knotens.

    `Elternteil`
    : Ein Elternteil ist der Vorgänger eines bestimmten Knotens.

    `Beziehung`
    : Beziehungen werden in Bäumen durch Verbindungslinien markiert. Dabei ist der oberere Knoten immer der Elternknoten und der hinführende darunter liegende Knoten das Kind.

    `Definition Baum`
    : Ein Baum ist eine dynamische Datenstruktur, in der Daten hierachisch dargestellt werden können.

Die Daten werden in Form von **Textdateien** gespeichert, die nach einer vorgegebenen Syntax aufgebaut sind.

!!! note "Beispiel"
    Folgend ist der Startteil einer IFC-Datei dargestellt.
    ```
    ISO-10303-21;
    HEADER;
    FILE_DESCRIPTION(('ViewDefinition [CoordinationView_V2.0, QuantityTakeOffAddOnView]'),'2;1');
    FILE_NAME('unternehmensgebaeude.ifc','2023-05-13T11:52:35+02:00',(''),(''),'IfcOpenShell v0.7.0-476ab506d','BlenderBIM 0.0.230506','');
    FILE_SCHEMA(('IFC2X3'));
    ENDSEC;
    DATA;
    #5=IFCAPPLICATION($,'2021','Autodesk Revit 2021 (ENU)','Revit');
    #6=IFCCARTESIANPOINT((0.,0.,0.));
    #9=IFCCARTESIANPOINT((0.,0.));
    #11=IFCDIRECTION((1.,0.,0.));
    #13=IFCDIRECTION((-1.,0.,0.));
    #15=IFCDIRECTION((0.,1.,0.));
    #17=IFCDIRECTION((0.,-1.,0.));
    ```

Die Zeilen mit **#** beginnend stellen eindeutig nummerierte einzelne Elemente bzw. Objekte dar. Sind mit **#** gekennzeichnete Nummern innerhalb von Klammern stehend, so sind dies Verweise auf andere Elemente dieser Datei. Damit werden Beziehungen zwischen Elementen und Objekten hergestellt. 

!!! note "Beispiel"
    Folgend ist ein Element einer IFC-Datei dargestellt.
    ```
    #32=IFCLOCALPLACEMENT(#207,#31);
    ```
    Das heißt, das Element #32 verweist auf das Element #207 und auf das Element #31. Das Element #32 hat somit zu beiden Elementen eine Beziehung.

!!! info inline end "5 min"

!!! question "Aufgabe 2 - Datenstrukturen erkennen"
    Für ein Gebäude ist ein vollständiger [Datensatz](/doc/ug.ifc) im IFC-Format gegeben. Öffnen Sie diesen mit einem Editor oder einem Browser und analysieren Sie die Beziehungen zwischen den Elementen. Entscheiden Sie, ob es sich bei dem Datensatz um eine Baumstruktur handelt. Gehen Sie bei der Untersuchung vom Element **#41** aus.

!!! note "..."
    `Entscheidung Baum`
    : ja/nein
    
    `Eigenschaften der Struktur`
    : Die ...

Die Beziehungen zwischen den Elementen sind komplex, aber dennoch nicht willkürlich. Durch die Verwendung einer Hierarchie für **bestimmte** Elemente ist für diese Hierarchie die Baumstruktur erkennbar.

![Hierarchie](/figures/ifc_baum.png)

Hierarchiebaum in IFC[^4]

!!! info inline end "15 min"

!!! question "Aufgabe 3 - Datenstrukturen erkennen"
    Auch im vorliegenden [Gebäude](/doc/ug.ifc)[^3] sind Elemente dieser Hierarchie gegeben. Suchen Sie diese Elemente per Texteditor in der IFC-Datei und stellen Sie die Elemente mit den Funktionsklassen **IfcProject**, **IfcSite**, **IfcBuilding**, **IfcStorey**, **IfcRoof** und **IfcSlab** mit **#ID** und **IFC-Funktionsklasse** und deren Beziehungen untereinander in einem Diagramm dar. Die Verbindungen sind über Elemente mit dem Schlüsselwort **IfcRelAggregates** definiert. Entscheiden Sie, ob die Datei widerspruchsfrei zur Baumhierarchie ist. Nutzen Sie die [Diagrammvorlage](/doc/vorlage_a3.odg).

!!! note "..."
    ![Haus der Informatik](/figures/vorlage_a3.png){ align=center }

    `Hierarchie widerspruchsfrei`
    : ja/nein ... weil ...

Für die Analyse der Hierarchie ist das Auswerten mit einem Texteditor sehr mühsam. Sinnvoller ist die Nutzung einer Softwareschnittstelle, die die Funktionalitäten und Strukturen der IFC-Dateien bereits liefert. Für die Programmiersprachen **Python** und **C++** gibt es eine freie Softwareschnittstelle mit dem Namen **ifcopenshell**[^5]. Diese können Sie nutzen, um die Hierarchie ermitteln zu lassen. 
    
!!! info inline end "10 min"

!!! question "Aufgabe 4 - Softwareschnittstelle ifcopenshell"
    Erstellen Sie auf dem Desktop ein Verzeichnis **ifc**. Laden Sie den [Python-Quelltext](/src/IFCTreeWidget.py) in dieses herunter und kopieren Sie ebenfalls die IFC-Datei unseres [Gebäudes](/doc/ug.ifc) in das Verzeichnis.  Öffnen Sie eine Kommandozeile und wechseln Sie in das Verzeichnis **ifc**. Starten Sie das Skript mit dem gegebenen Befehl. Erklären Sie die Bedeutung der Spalte **GlobalID**.

!!! code "Python-Pakete nachinstallieren"
    ```
    pip --proxy kjs-03.lan.dd-schulen.de:3128 install PyQt5
    pip --proxy kjs-03.lan.dd-schulen.de:3128 install IfcOpenshell
    ```

!!! code "Baumansicht IFC"
    ```
    python IFCTreeWidget.py ug.ifc
    ```

Es wird ein Explorer-Fenster geöffnet und die Baumstruktur ist softwaretechnisch durch den **Tree-View** dargestellt.   

![Baumansicht der IFC-Datei](/figures/ifc_tree.png)

!!! info inline end "10 min"

!!! question "Aufgabe 5 - Hierarchie reparieren"
    Offensichtlich ist die IFC-Datei bezüglich der Hierarchie fehlerbehaftet. Das Dach **IfcRoof** mit den beiden Dachhälften **IfcSlab** ist nicht auffindbar. Verbinden Sie das Dach mit dem Gebäude, in dem Sie ein neues Element **IfcRelAggregates** mit dem Texteditor in die [Gebäude-Datei](/doc/ug.ifc) einfügen. Speichern Sie die neue Datei als **ug_mit_dach.ifc**. Prüfen Sie anschließend die Hierarchie mit dem Python-Quelltext [IFCTreeWidget.py](/src/IFCTreeWidget.py).

!!! note "Das Ergebnis sollte nun so aussehen ..."
    
    ![](/figures/ifc_tree_with_roof.png){ align=center }

Das Erstellen von dreidimensionalen elektronischen Gebäudedaten wird mit spezieller CAD-Software erleichtert. Wir wollen die freie Software **Blender** nutzen und die IFC-Datei importieren.

!!! info inline end "10 min"

!!! question "Aufgabe 6 - IFC-Import in CAD-Software"
    Öffnen Sie die Software **Blender** über die **PortableApps-Menüstruktur**. Importieren Sie die Datei **ug_mit_dach.ifc**.
    ![](/figures/blender_ifc_import.png)

Für die Softwareentwicklung sollen IT-Komponenten der **ITSystemhaus GmbH** in die Gebäudedaten eingepflegt werden, um die Angebotserstellung und eine spätere Installation zu unterstützen. Dazu erstellen Sie zuerst ein einfaches IFC-Objekt, welches danach als Server in die Gebäudedaten importiert wird.  

!!! info inline end "10 min"

!!! question "Aufgabe 7 - Nutzen der Schnittstelle ifcopenshell"
    Laden Sie den [Python-Quelltext](/src/server_create.py) dazu in den Ordner **ifc**. Starten Sie das Skript mit gegebenem Befehl. Es wird eine IFC-Datei **server.ifc** erzeugt, die unseren Server als quaderförmigen Kasten modelliert. Die Server-Komponente wird dabei in ein eigenes IFC-Projekt mit eigener Hierarchie eingebettet, die Sie mit dem **TreeView** anschauen können. Bestimmen Sie die Funktionsklasse und den Namen des Server-Objektes.

??? code "Erzeugen eines Server-Objektes"
    
    ```
    python server_create.py
    ```
    ... mit dem Inhalt von **server_create.py**
    ```
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

    # Assign our new body geometry back
    run("geometry.assign_representation", model, product=comm, representation=geom)

    # Place our server in the ground floor
    run("spatial.assign_container", model, relating_structure=storey, product=comm)

    # Write out to a file
    model.write("server.ifc")
    ```
    Eventuell ist das Paket numpy noch nicht installiert. Dieses kann mit dem folgenden Kommandozeilenbefehl nachinstalliert werden.
    ```
    pip --proxy http://kjs-03.lan.dd-schulen.de:3128  install numpy
    ```
Die Hierarchie von **server.ifc** kann wiederum mit dem **TreeView** analysiert werden und es zeigt sich, dass auch hier die Klassen **IfcProject**,**IfcSite**,**IfcBuilding** und **IfcStorey** vorhanden sind. Die zughörigen Funktionsaufrufe der Softwareschnittstelle im [Python-Quelltext](/src/server_create.py) sind leicht zu finden. Das Modell lässt sich auch in **blender** importieren. Leider wird der Server hier als neues Projekt importiert und ein Einhängen des Elements in unser Gebäude per *Copy and Paste* scheitert an einer fehlerhaften IFC-Exportfunktion von **blender**. Deshalb wandeln Sie das Python-Skript etwas ab und hängen den Server per Softwareschnittstelle ein.

!!! info inline end "15 min"

!!! question "Aufgabe 8 - Server in Gebäude einhängen"
    Nutzen Sie das Skript [server_create.py](/src/server_create.py) als Vorlage und erstellen Sie daraus ein neues Skript **server_create_in_ug.py**. Führen Sie darin folgende Aktionen aus:

    * Öffnen Sie die Datei **ug_mit_dach.ifc**.
    * Weisen Sie der Variablen **context** das Element mit der Klasse **IfcGeometricRepresentationContext** aus der Gebäudedatei zu.
    * Weisen Sie der Variablen **body** das Element mit der Klasse **IfcGeometricRepresentationContext('Body','Model',...** aus der Gebäudedatei zu.
    * Weisen Sie der Variablen **storey** das Element mit der Klasse **IfcBuildingStorey(...,Floor 0, ...)** aus der Gebäudedatei zu.
    * Speichern Sie das neue Modell in der Datei **ug_mit_dach_und_server.ifc**.
    
 Wenn Sie nun das Modell in **blender** importieren, gibt es nur ein Projekt und der Server ist der Etage 0 zugeordnet. Nun können Sie den Server im CAD-Modell auf den Schreibtisch im Einzelbüro stellen.

!!! info inline end "15 min"

!!! question "Aufgabe 9 - Verschieben des Servers im CAD-Modell"
    Nutzen Sie die Verschiebe- und Rotationsfunktion, die eine Verschiebung in die Richtungen X, Y und Z zulässt. Verändern Sie die Werte, bis der Server an der korrekten Stelle auf dem Schreibtisch steht. Exportieren Sie das Modell in **blender** als **ug_mit_dach_und_server_auf_schreibtisch**. 

    ![](/figures/blender_verschiebung.png)

    ![](/figures/blender_zielschreibtisch.png)

!!! info inline end "20 min"

!!! question "Aufgabe 10 - weitere Server"
    Fügen Sie zwei weitere Server mit den Namen **ITDD-Server001** und **ITDD-Server002** in das CAD-Modell ein und verteilen Sie diese auf die beiden anderen Schreibtische. Speichern Sie die Datei als **ug_mit_dach_und_drei_servern_auf_schreibtisch**.     




[^1]: buildingSMART International Ltd.; [IFC-Specifications](https://technical.buildingsmart.org/standards/ifc/ifc-schema-specifications/)
[^2]: Beuth Verlag; DIN EN ISO 16739-1 - 2021-11
[^3]: Andre Wisen; [BIM Whale Project](https://bimwhale.gitbook.io)
[^4]: buildingSMART International Ltd.; [SpatialStructure](https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifcproductextension/lexical/ifcrelcontainedinspatialstructure.htm)
[^5]: [IfcOpenShell-Community](https://ifcopenshell.org/); [github Source](https://github.com/IfcOpenShell)