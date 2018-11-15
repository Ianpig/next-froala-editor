import React, { Component } from 'react';
import dynamic from 'next/dynamic';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/third_party/embedly.min.js';


// That's where the magic happens 
const FroalaEditorInput = dynamic(import('react-froala-wysiwyg'), {
  ssr: false
});

class EditorComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '<span>My Document\'s Title</span>'
    };

    this.handleModelChange = this.handleModelChange.bind(this);
  }

  handleModelChange (model) {
    this.setState({
      content: model
    });
  }

  render () {
    return(
      <div className="sample">
        <h2>Full Featured</h2>
        {typeof window === 'undefined' &&
          this.state.content
        }
        <FroalaEditorInput
          model={this.state.content}
          onModelChange={this.handleModelChange}
        />
        <h4>Rendered Content:</h4>
      </div>
    );
  }

}

export default EditorComponent;