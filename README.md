## Quickstart

1. Install app dependencies by `yarn install`
2. Install backend server dependencies by `yarn install` in `backend-stub` dir
3. Run stub server by `npm run server` and run application in dev mode by `npm start`

## Build

Run `npm run build`

## TODO
- сделать заглушку-сервер с запросами GET /goods, PUT /goods/:id, как бд скорее всего файл json
- реализуем фичу: делаем запрос за списком товаров, список товаров заполняется данными, при выборе товара инфа по товару появляется в левой части страницы. есть возможно нажать на кнопку сохранить, тогда данные должны быть обновлены (rxjs должен быть)

### конкретнее
- делаем сервис в котором будут храниться данные компонента GoodsComponent (rxjs)
- GoodsComponent делает запрос за списком и заполняет сервис данными
- GoodsListComponent слышит эти данные и обновляется
- по выбору товара в GoodsListComponent обновляется данные в сервисе (выбранный товар) и это слышит GoodsInfoComponenent, там обновляется товар
