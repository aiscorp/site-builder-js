import firstImg from './assets/head.jpeg'
import {TitleBlock, ImageBlock, TextBlock, ColumnsBlock} from './classes/blocks'

export const model = [
  new TitleBlock('Мой маленький блог о моих хвостатых друзьях',
    {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #10100D, #221D1B)',
        color: '#eee',
        'text-align': 'center',
        padding: '1rem'
      }
    }),
  new ImageBlock(firstImg, {imageStyles:{width: '100%'}}),
  new TextBlock('Дорогие друзья! Читая этот блог вы сможете развечься и узнать много интересного:', {}),
  new ColumnsBlock(['Интересные фото из жизни котиков', 'Статьи о том как воспитывать и ухаживать за вашими' +
  ' хвостатыми друзьями', 'И конечно не без постов с мемами о котиках'],{})
]

export const _model = [
  {
    type: 'title',
    value: 'Default title value',
    options: {
      tag: 'h2',
      // styles: `background: linear-gradient(to right, #f09, #534); color:#fff; text-align: center; padding: 1rem;`
      styles: {
        background: 'linear-gradient(to right, #f09, #534)',
        color: '#fff',
        'text-align': 'center',
        padding: '1rem'
      }
    }
  },
  {
    type: 'text',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    options: {}
  },
  {
    type: 'columns',
    value: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    ],
    options: {}
  },
  {
    type: 'image',
    value: firstImg,
    options: {}
  }
]
