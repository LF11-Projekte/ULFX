# Einrichtung der gemeinsamen Dokumentenablage mit **git**

!!! note "Erkenntnis"
    Sie haben festgestellt, dass es bis zur Angebotserstellung ein längerer Weg ist, und auf diesem sicherlich eine größere Anzahl elektronischer Dokumente zu erstellen ist. Sie haben auch erkannt, dass in der Gruppe gemeinsam auf die Dokumente zugegriffen werden sollte.

* Informieren Sie sich im Internet über das Versionskontrollsystem git. Die git-Shell ist auf den Rechnern installiert. Nutzen Sie als Einführung das [git-Tutorial](https://lerneprogrammieren.de/git/) sowie das [Video git-Einführung](https://www.youtube.com/watch?v=GOX1C1qdSys). Folgende Begriffe sollten Sie dabei verstehen: Repository, Remote Repository, Commit, Push, Pull,
Clone
* Erstellen Sie ein lokales Repository und fügen Sie diesem die bisher in Ihrer Gruppe erstellten Dateien hinzu.
* Erstellen Sie ein Remote-Repository, z.B. mit GitHub und laden Sie die Dateien des lokalen Repositorys in das Remote-Repository.
* Geben Sie allen Gruppenmitglieder Lese- und Schreibzugriffe auf das Remote Repository.
* Alle Gruppenmitglieder führen einen Clone-Vorgang des Remote-Repositorys auf ihren eigenen Rechnern aus und erhalten lokale Kopien vom Remote-Repository.

!!! warning "Einstellung des Jugendschutz-Proxy-Servers für den Remote-Zugriff auf git"
    Folgenden Aufruf in der Kommandozeile ausführen und den Verweis auf den Proxy-Server einstellen:
    ```
    git config --global http.proxy http://kjs-04.lan.dd-schulen.de:3128
    ```

