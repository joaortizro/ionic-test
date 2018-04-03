# Configuracion para notificaciones push en Ionic V3

A continuación se mostrara los pasos generales para lograr este tipo de notificaciones mediante el uso de OneSignal

## SetUp

1.  crear una cuenta en [OneSignal](https://onesignal.com)
2.  crear una cuenta en [Firebase](https://firebase.google.com)
    2.1 ir a la consola
    ![enter image description here](https://lh3.googleusercontent.com/ZECe0FR1J1tE7vup-Db4V7VLA65jansp7ljip7dfUSF5T0OPlpV2SSZwNnp-KfVrRMeJTSmOWv0N)

    2.2 Creamos un nuevo proyecto
    ![enter image description here](https://lh3.googleusercontent.com/reZTNQonuUqGQfMY21ZhbsXXcHE2sNiNe4Q1uCFQmhFxuNRoW-IXkCJTwyFt5U_8vtLTwTpOiM2Y)

    2.3 Seleccionanos "configuracion del proyecto"
    ![enter image description here](https://lh3.googleusercontent.com/pQYwjOBJr6T8JIJRO8W766gUNhpbVwLL1kbE-ydrQT6Tc7AFuYATYCTxaQgo7EpNkVAKqKo5KGWh)

    2.4 A continuación encontraremos la **clave de servidor o Google Server API key** y **ID del remitente o Google Project Number** serán de gran utilidad en próximos pasos de la configuración
    ![enter image description here](https://lh3.googleusercontent.com/b-E_eaWVsU7Y7RIYfrAw3hOihJw-Fp0Y-axlBxI7g9zmfgmmmGisdE2bgxL_XE1pbgK0Inf5Xv7-)

3.  Configuracion de OneSignal
    3.1 crear un proyecto en OneSignal
    ![enter image description here](https://lh3.googleusercontent.com/IpJ8Ajhg2PgLGxKYLsba31AQT7PD9lL8r9qhF5kDME6ilrgwtxIFDEgcDQkAX3yAbjDD3lDHtruK)
    3.2 Seleccionamos la plataforma que deseamos , solo se puede una plataforma a la vez , ya que por ejemplo para iOS se requiere certificados digitales, un proceso diferente al de Android
    ![enter image description here](https://lh3.googleusercontent.com/hywfLOBvIul6cwiEitj5hDk8npwmP6qpTtsqHijn4ZFt5dVIcOcf3f0nytAtZRdj4DzHJdCfJxoC)
    3.3 copiamos y pegamos las llaves generadas por firebase en el paso 2.4
    ![enter image description here](https://lh3.googleusercontent.com/URA_Sc802eYX-xj9bJUB6VUvIIRiR-m8rV_8IY8LnM2cTm1JD_U4Lzahz8hBsOu4d9DRsvJxH88-)
    3.4 seleccionamos el Target SDK que en nuestro caso es ionic
    ![enter image description here](https://lh3.googleusercontent.com/VF9C2B5gUe7NAmHx_UkFhpHgqarJq3mqKuta0YrpkI57Qqv-hNLvqm-jZf3IfN-phnh2jZ8nePyr)

Listo, ahora pasaremos a la parte de instalación del plugin acompañado de codigo nesesario para las notificaciones Push

## Instalacion del plugin

    $ ionic cordova plugin add onesignal-cordova-plugin
    $ npm install --save @ionic-native/onesignal

luego agregamos el plugin **OneSignal** a nuestro directorio en el archivo `\src\app\app.module.ts`

    import { OneSignal } from  '@ionic-native/onesignal';
    . . .
    . . .
    @NgModule{
        . . .
        providers :[OneSignal]
        . . .
    }

luego en el archivo `\src\app\app.component.ts` pondremos el código necesario y suficiente para que las notificaciones lleguen

    import { OneSignal } from  '@ionic-native/onesignal';

    export class MyApp{
    constructpr (. . . private  oneSignal:  OneSignal )
        platform.ready().then(() => {
    	. . .
        this.notificationSetUp();
        });
    }
    public notificationSetUp(){
        this.oneSignal.startInit('APP_ID', 'GOOGLE_PROJECT_NUMBER');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    	    this.oneSignal.handleNotificationReceived().subscribe(() => {
    	    // do something when notification is received
    	    });
    	    this.oneSignal.handleNotificationOpened().subscribe(data  => {
    	    console.log('notificationOpenedCallback: '  +  JSON.stringify(data));
    	    // do something when a notification is opened
    	    });

        console.log(this.oneSignal.getIds());
        this.oneSignal.endInit();
        }

una de las partes mas importantes son las funciones **startInit** y **getIds** ya que con la primera insertamos las llaves generadas en OneSignal , y con la ultima nos permitirá obtener el id del usuario para enviar notificaciones especificas a él .

## Añadir device a onesignal

Por defecto OneSignal se encarga de buscar los devices que se encuentran suscritos , sin embargo existe la opcion de usar la API para hacer este paso , que OneSignal **NO** recomemienda, ver [aquí](https://documentation.onesignal.com/reference#add-a-device) sus razones

## Captura del UID

Para capturar el ID del usuario debemos utilizar la función previamente diseñada por el equipo de ionic **getIds()** el cual es una promesa que retorna el ID del usuario y el tokenPush que es el asignado por Google

    pushToken:"APA91bFt-_-r2sGRFspXE7....."
    userId:"a4733c65-f4ac-4222-947c-...."

a continuación se muestra un código ejemplo que captura el ID  

userId : string
pushToken: string
...
this.oneSignal.getIds()
.then((response: { userId; pushToken }) =>
{this.userId = response.userId;
this.pushToken = response.pushToken;
console.log('userId', this.userId);
})
.catch(exception => {
console.error(exception);
}),

## Servicio para lanzar notificaciones

para mas información referirse a la documentación de OneSignal [aquí](https://documentation.onesignal.com/reference) , hay tres formas de notificaciones

1.  para todos
2.  para un grupo
3.  para un usuario
    veremos principalmente las opciones 1 y 3

**Para la mayoría de estos servicios necesitamos recordar la siguiente información que OneSignal provee**
![enter image description here](https://lh3.googleusercontent.com/1hq8gEE9uRc3lyVFrVSOSjrLci5LmFYZ4i6M9zWQayJufRvMILUhKbsGq18iU4dafMYSETy3EOOQ)

### 1

     **url**:  `https://onesignal.com/api/v1/notifications`

**metodo**:post
**header**:  
|key|value |
|--|--|
| Authorization |Basic MDc0YzgxNjAtMmRkNS00NmI2L...... |
| Content-Type| application/json|
**body**:
`{ "app_id" : "93ea17c7-2103-49d5-....", "headings": {"en":"Postam"}, "contents": {"en":"from postman"}, "included_segments":["All"] }`
**NOTA**: el prefijo **Basic** es obligatorio en el valor de la llave de autorización antes del **REST API KEY** .
Las llaves heading y contents hacen referencias respectivamente a el titulo y contenido de la notificación , el cual es ambos casos es un objeto en el cual se le especifica una llave que asocia el idioma del mensaje. Por ultimo la llave include_segments , hace referencia a el grupo de personas a los que se les va a entregar

### 3

**url**: `https://onesignal.com/api/v1/notifications`
**metodo**:post
**header**:  
|key|value |
|--|--|
| Authorization |Basic MDc0YzgxNjAtMmRkNS00NmI2L...... |
| Content-Type| application/json|
**body**:
`{ "app_id" : "93ea17c7-2103-....", "include_player_ids":["a4733c65-f4ac-4222-947c-c3dbe3b483bd"], "headings": {"en":"hi jonas"}, "contents": {"en":"from postman to a jonas "} }`
**NOTA**
**include_players_ids** es un arreglo con el **userId** a él usuario en especifico
