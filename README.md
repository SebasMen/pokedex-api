<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. CLonar repositorio
2. Reconstruir lospaquetes de Node 
```
  yarn install
```
3. Instalar Nest CLI
```
  npm i -g @nestjs/cli
```
4. Levantar base de datos
```
  docker-compose up -d
```

5. Clonar el archivo __.env.tempalte__ y renombar la copia a __.env__

6. Llenar variable de entorno definidas

7. Ejecutar la aplicación en dev:
```
  yarn start:dev
```


## Stack usado
* Nest
* MongoDB