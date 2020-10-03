import {block} from '../utils'
import {TextBlock, TitleBlock} from './blocks'

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.update = updateCallback

    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('text'),
      block('title')
    ].join('')
  }

  add(event) {
    event.preventDefault()

    const type = event.target.name
    const content = event.target.content.value
    const styles = event.target.styles.value

    let newBlock

    if (type === 'text') {
      newBlock = new TextBlock(content, {styles})
    } else if (type === 'title') {
      newBlock = new TitleBlock(content, {styles})
    }

    this.update(newBlock)


  }
}

