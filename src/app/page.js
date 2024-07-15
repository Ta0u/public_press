"use client" 
import D3LineProto2 from './components/D3LineProto2.js'
import Navigation from './components/home.jsx';
export default function Home() {
  return (
<div>
<Navigation/>
  <div className="dav"><D3LineProto2 Senval = "Sen1"/></div>
  <div className="dav"><D3LineProto2 Senval = "Sen2"/></div>
  <div className="dav"><D3LineProto2 Senval = "Sen3"/></div>
  <div>
  <p className="dav">Sen1</p>
  <p className="dav">Sen2</p>
  <p className="dav">Sen3</p>
  </div>
<div>
  <div className="dav"><D3LineProto2 Senval = "Sen4"/></div>
  <div className="dav"><D3LineProto2 Senval = "Sen5"/></div>
  <div className="dav"><D3LineProto2 Senval = "Sen6"/></div>
</div>
  <div>
  <p className="dav">Sen4</p>
  <p className="dav">Sen5</p>
  <p className="dav">Sen6</p>
  </div>
</div>
  );
}
