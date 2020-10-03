import firstImg from './assets/first.jpg'

export const model = [
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
