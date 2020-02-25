import { Component, ComponentInterface, h } from '@stencil/core'

@Component({
  tag: 'my-second-component',
  shadow: false,
})
export class MySecondComponent implements ComponentInterface {
  componentWillLoad = (): void => {
    this.log('componentWillLoad')
  }

  connectedCallback = (): void => {
    this.log('connectedCallback')
  }

  componentWillRender = (): void => {
    this.log('componentWillRender')
  }

  componentDidRender = (): void => {
    this.log('componentDidRender')
  }

  componentDidLoad = (): void => {
    this.log('componentDidLoad')
  }

  componentWillUpdate = (): void => {
    this.log('componentWillUpdate')
  }

  componentDidUpdate = (): void => {
    this.log('componentDidUpdate')
  }

  render = (): void => {
    this.log('render')

    return <div/>
  }

  private readonly log = (name: string): void => {
    console.log(`My2ndComponent: ${ name }`)
  }
}
