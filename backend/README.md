
## How to generate the API calling code form the swagger.json?

Use the following command:

```shell
npm run build && npx swagger-typescript-api -p src/swagger.json -o <output-target-dir> -n <target-file-name>
```