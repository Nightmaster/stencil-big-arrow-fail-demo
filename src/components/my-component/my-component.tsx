import { Component, ComponentInterface, h } from '@stencil/core'

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  componentWillLoad(): void {
    this.log('componentWillLoad')
  }

  connectedCallback(): void {
    this.log('connectedCallback')
  }

  componentWillRender(): void {
    this.log('componentWillRender')
  }

  componentDidRender(): void {
    this.log('componentDidRender')
  }

  componentDidLoad(): void {
    this.log('componentDidLoad')
  }

  componentWillUpdate(): void {
    this.log('componentWillUpdate')
  }

  componentDidUpdate(): void {
    this.log('componentDidUpdate')
  }

  render(): HTMLElement[] {
    this.log('render')

    return [
      <div>Hello, World!</div>,
      <my-second-component/>
    ]
  }

  private readonly log = (name: string): void => {
    console.log(`MyComponent: ${ name }`);
  }
}
