## Quickstart

1. Install app dependencies by `yarn install`
2. Run application in dev mode by `yarn start`

## Build

Run `yarn run build`

## TODO
- реализуем фичу: делаем запрос за списком товаров, список товаров заполняется данными, при выборе товара инфа по товару появляется в левой части страницы. есть возможно нажать на кнопку сохранить, тогда данные должны быть обновлены (rxjs должен быть)

### конкретнее
- делаем сервис в котором будут храниться данные компонента GoodsComponent (rxjs)
- GoodsComponent делает запрос за списком и заполняет сервис данными
- GoodsListComponent слышит эти данные и обновляется
- по выбору товара в GoodsListComponent обновляется данные в сервисе (выбранный товар) и это слышит GoodsInfoComponenent, там обновляется товар

- читаем про то, как работает change detecting в Angular https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html
- делаем сервис data service storage (на rxjs)
- организовываем работу компонента так, чтобы он делал запрос и сэтил данные в data storage
- компонент списка и компонент с информацией о товаре слушают data storage и обновляют своё представление в соответсвии с ним
