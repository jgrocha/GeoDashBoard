# GeoExt 3 based Dashboard

This version of the Sencha Admin Dashboard adds another view supported by the [GeoExt 3](https://github.com/geoext/geoext3) package, containing:
* a map
* a grid
* a legend tree

## Source

All the code used to display the panel is in the source folder [`classic/src/view/geo`](https://github.com/jgrocha/GeoDashBoard/tree/master/classic/src/view/geo).

To display the GeoExt 3 based panel, a new entry was added to [`app/store/NavigationTree.js`](https://github.com/jgrocha/GeoDashBoard/blob/master/app/store/NavigationTree.js):

```
            {
                text:    'GeoExt 3',
                view:    'geo.MapPanel',
                leaf:    true,
                iconCls: 'x-fa fa-globe',
                routeId: 'map'
            }
```
## Test

To test the application locally, you can run a local server using:

```
sencha app watch
```

The local server is listen on port 1841. You can test the application by opening:

[http://localhost:1841](http://localhost:1841)

## Build

Before deploying the application, it is necessary to build it, to generate a smaller and faster version.

On the root folder:

```
sencha app build
```

The application, ready to deploy, will be saved in `build/production/Admin`.

## Deploy

To deploy the application on a proper server, copy the entire folder `build/production/Admin` content to the server, and configure your http server accordingly.

```
scp -r build/production/Admin/* jgr@geomaster.pt:public_html/geodashboard/
```

Or use `rsync`:

```
rsync -arv build/production/Admin/* jgr@geomaster.pt:public_html/geodashboard
```

For example, using Apache 2.4.x, this application can be publishing using the following config file `/etc/apache2/sites-enabled/geodashboard.geomaster.pt.conf`:

```
<VirtualHost *:80>
    ServerName geodashboard.geomaster.pt
    DocumentRoot "/home/jgr/public_html/geodashboard"
    <Directory /home/jgr/public_html/geodashboard>
        Options Indexes FollowSymLinks
        AllowOverride None
        Require all granted
    </Directory>
</VirtualHost>
```

The folder `/home/jgr/public_html/geodashboard` contains the copy of `build/production/Admin`:

```
jgr@cloud01:~/public_html/geodashboard$ ls -al
total 52
drwxrwxr-x  5 jgr jgr  4096 Jan  4  2016 .
drwxrwxr-x 15 jgr jgr  4096 May 28 13:21 ..
drwxrwxr-x  3 jgr jgr  4096 Jan  4  2016 classic
-rw-rw-r--  1 jgr jgr  4068 Aug 21 15:33 classic.json
drwxrwxr-x  3 jgr jgr  4096 Jan  4  2016 ext
-rw-rw-r--  1 jgr jgr 25023 Aug 21 15:33 index.html
drwxrwxr-x  3 jgr jgr  4096 Jan  4  2016 resources
```

## Do you have the last version of GeoExt 3?

[GeoExt 3](https://github.com/geoext/geoext3) in under development. To make sure you have the last version, remove it from your project and add it again.

### Remove previous GeoExt3 package

```
sencha package remove GeoExt
rm -rf packages/remote/GeoExt
```

### Add the GeoExt3 package

```
sencha package repo add GeoExt http://geoext.github.io/geoext3/cmd/pkgs
```

Edit `app.json` and make sure you have GeoExt in the requirements:

```
    "builds": {
        "classic": {
            "toolkit": "classic",
            "theme": "theme-triton",
            "requires": [
                "font-awesome",
                "GeoExt"
            ]
        }
        /*,
        "modern": {
            "toolkit": "modern",
            "theme": "theme-triton"
        }*/
    },
```

Finally, issue a `refresh` command and check the output.

```
sencha app refresh
```

On the output, confirm that the package is downloaded:

```
jgr@dusseldorf:~/WebstormProjects/GeoDashBoard$ sencha app refresh
Sencha Cmd v6.0.2.14
[INF] Processing Build Descriptor : classic
[INF] Downloading : ....................
[INF] Extracting  : ....................
[INF] Starting server on port : 1841
[INF] Mapping http://localhost:1841/~cmd to /home/jgr/bin/Sencha/Cmd/6.0.2.14...
[INF] Mapping http://localhost:1841/ to /home/jgr/WebstormProjects/GeoDashBoard...
[INF] Application available at http://localhost:1841
[INF] Loading app json manifest...
[INF] Appending content to /home/jgr/WebstormProjects/GeoDashBoard/bootstrap.js
[INF] Writing content to /home/jgr/WebstormProjects/GeoDashBoard/classic.json
```

You should have the last version on your `packages/remote/GeoExt` local folder.