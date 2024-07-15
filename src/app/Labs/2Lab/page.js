"use client" 
import D3LineProto2 from '../../components/D3LineProto2.js'
import Navigation from '../../components/home.jsx';
import Side from '../../components/rsuite_sidenav.js';
export default function Home() {
  return (
<div>
    <Side/>
  <div className="dav"><D3LineProto2 Senval = "Sen1" environment = "env2"/></div>
  <div className="dav"><D3LineProto2 Senval = "Sen2" environment = "env2"/></div>
  <div className="dav"><D3LineProto2 Senval = "Sen3" environment = "env2"/></div>
  <div>
  <p className="dav">Sen1</p>
  <p className="dav">Sen2</p>
  <p className="dav">Sen3</p>
  </div>
<div>
  <div className="dav"><D3LineProto2 Senval = "Sen4" environment = "env2"/></div>
  <div className="dav"><D3LineProto2 Senval = "Sen5" environment = "env2"/></div>
  <div className="dav"><D3LineProto2 Senval = "Sen6" environment = "env2"/></div>
</div>
  <div>
  <p className="dav">Sen4</p>
  <p className="dav">Sen5</p>
  <p className="dav">Sen6</p>
  </div>
</div>
  );
}
