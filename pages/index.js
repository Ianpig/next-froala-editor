
/* Without CSS Modules, maybe with PostCSS */
import Head from 'next/head';
import Examples from '../components/examples'


export default () => 
<div>
<Head>
<title>My styled page</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.9.0/css/froala_editor.pkgd.min.css" rel="stylesheet" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.9.0/css/froala_editor.min.css" rel="stylesheet" />
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
</Head>
<div className='example'>
  <Examples />
  O Hai world!
</div>
</div>
/* With CSS Modules */
/*
import css from "../style.css"

export default () => <div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
*/
