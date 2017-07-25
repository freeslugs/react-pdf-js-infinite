import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PdfPage extends Component {

  static propTypes = {
    page: PropTypes.number,
    scale: PropTypes.number,
    rotate: PropTypes.number,
    className: PropTypes.string,
    pdf: PropTypes.object,
    onClick: PropTypes.func,
  };

  componentDidMount = async () =>  {
    // console.log('componentDidMount')
    const pdfPage = await this.props.pdf.getPage(this.props.page);
    this.renderPage(pdfPage);
    // console.log('aftercomponentDidMount');
    if(this.props.page == 1)
      this.props.setFirstCanvas(this.canvas);
  }

  getCoordinates = (e) => {
    const newOffsetTop = this.props.firstCanvas.getBoundingClientRect().top;    
    var x = new Number();
    var y = new Number();
    
    if (e.pageX != undefined && e.pageY != undefined) {
      x = e.pageX;
      y = e.pageY;
    } else {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    x -= this.canvas.offsetLeft;
    y -= this.canvas.offsetTop;

    const offsetTop = this.props.offsetTop - newOffsetTop;
    const y2 = offsetTop + y;
    return {p: this.props.page - 1, x: x, y: y2};
  }

  renderPage = async (pdfPage) => {
    // console.log(`renderPage, ${pdfPage}`)
    if (pdfPage) {
      const canvasContext = this.canvas.getContext('2d');
      const { scale, rotate } = this.props;
      const viewport = pdfPage.getViewport(scale, rotate);
      this.canvas.height = viewport.height;
      this.canvas.width = viewport.width;
      await pdfPage.render({ canvasContext, viewport });
      // console.log('afterRenderPage');
    }
  }

  render() {
    return (
      <canvas 
        ref={(canvas) => { this.canvas = canvas; }} 
        className={this.props.className} 
        onClick={(e) => {
          const coordinates = this.getCoordinates(e);
          this.props.onClick(e, coordinates);
        }}
      />
    );
  }

}
