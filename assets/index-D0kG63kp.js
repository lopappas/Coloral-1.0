(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zl="176",Wr={ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ef=0,Tc=1,bf=2,rh=1,Af=2,Ti=3,Pi=0,wn=1,Gn=2,Zi=0,Xr=1,Ec=2,bc=3,Ac=4,wf=5,pr=100,Rf=101,Cf=102,Pf=103,Lf=104,Df=200,If=201,Nf=202,Uf=203,$a=204,Za=205,Of=206,Ff=207,Bf=208,kf=209,Hf=210,zf=211,Vf=212,Gf=213,Wf=214,Ja=0,Qa=1,el=2,Yr=3,tl=4,nl=5,il=6,rl=7,sh=0,Xf=1,qf=2,Ji=0,jf=1,Yf=2,Kf=3,$f=4,Zf=5,Jf=6,Qf=7,wc="attached",ed="detached",oh=300,Kr=301,$r=302,sl=303,ol=304,Xo=306,Zr=1e3,Ki=1001,Ho=1002,xn=1003,ah=1004,ws=1005,Pn=1006,Po=1007,bi=1008,oi=1009,lh=1010,ch=1011,Ds=1012,Vl=1013,_r=1014,qn=1015,ks=1016,Gl=1017,Wl=1018,Is=1020,uh=35902,hh=1021,fh=1022,Fn=1023,Ns=1026,Us=1027,Xl=1028,ql=1029,dh=1030,jl=1031,Yl=1033,Lo=33776,Do=33777,Io=33778,No=33779,al=35840,ll=35841,cl=35842,ul=35843,hl=36196,fl=37492,dl=37496,pl=37808,ml=37809,gl=37810,_l=37811,xl=37812,vl=37813,yl=37814,Ml=37815,Sl=37816,Tl=37817,El=37818,bl=37819,Al=37820,wl=37821,Uo=36492,Rl=36494,Cl=36495,ph=36283,Pl=36284,Ll=36285,Dl=36286,Os=2300,Fs=2301,la=2302,Rc=2400,Cc=2401,Pc=2402,td=2500,nd=0,mh=1,Il=2,id=3200,rd=3201,gh=0,sd=1,Yi="",on="srgb",yn="srgb-linear",zo="linear",Bt="srgb",Ar=7680,Lc=519,od=512,ad=513,ld=514,_h=515,cd=516,ud=517,hd=518,fd=519,Nl=35044,Dc="300 es",Ai=2e3,Vo=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ic=1234567;const Cs=Math.PI/180,Jr=180/Math.PI;function jn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function Kl(r,e){return(r%e+e)%e}function dd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function pd(r,e,t){return r!==e?(t-r)/(e-r):0}function Ps(r,e,t){return(1-t)*r+t*e}function md(r,e,t,n){return Ps(r,e,1-Math.exp(-t*n))}function gd(r,e=1){return e-Math.abs(Kl(r,e*2)-e)}function _d(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function xd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yd(r,e){return r+Math.random()*(e-r)}function Md(r){return r*(.5-Math.random())}function Sd(r){r!==void 0&&(Ic=r);let e=Ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Td(r){return r*Cs}function Ed(r){return r*Jr}function bd(r){return(r&r-1)===0&&r!==0}function Ad(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rd(r,e,t,n,i){const s=Math.cos,a=Math.sin,l=s(t/2),u=a(t/2),h=s((e+n)/2),p=a((e+n)/2),m=s((e-n)/2),_=a((e-n)/2),v=s((n-e)/2),T=a((n-e)/2);switch(i){case"XYX":r.set(l*p,u*m,u*_,l*h);break;case"YZY":r.set(u*_,l*p,u*m,l*h);break;case"ZXZ":r.set(u*m,u*_,l*p,l*h);break;case"XZX":r.set(l*p,u*T,u*v,l*h);break;case"YXY":r.set(u*v,l*p,u*T,l*h);break;case"ZYZ":r.set(u*T,u*v,l*p,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xh={DEG2RAD:Cs,RAD2DEG:Jr,generateUUID:jn,clamp:pt,euclideanModulo:Kl,mapLinear:dd,inverseLerp:pd,lerp:Ps,damp:md,pingpong:gd,smoothstep:_d,smootherstep:xd,randInt:vd,randFloat:yd,randFloatSpread:Md,seededRandom:Sd,degToRad:Td,radToDeg:Ed,isPowerOfTwo:bd,ceilPowerOfTwo:Ad,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Rd,normalize:Ot,denormalize:Wn};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,s,a,l,u,h){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,l,u,h)}set(e,t,n,i,s,a,l,u,h){const p=this.elements;return p[0]=e,p[1]=i,p[2]=l,p[3]=t,p[4]=s,p[5]=u,p[6]=n,p[7]=a,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],l=n[3],u=n[6],h=n[1],p=n[4],m=n[7],_=n[2],v=n[5],T=n[8],E=i[0],y=i[3],x=i[6],U=i[1],I=i[4],P=i[7],W=i[2],k=i[5],f=i[8];return s[0]=a*E+l*U+u*W,s[3]=a*y+l*I+u*k,s[6]=a*x+l*P+u*f,s[1]=h*E+p*U+m*W,s[4]=h*y+p*I+m*k,s[7]=h*x+p*P+m*f,s[2]=_*E+v*U+T*W,s[5]=_*y+v*I+T*k,s[8]=_*x+v*P+T*f,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],p=e[8];return t*a*p-t*l*h-n*s*p+n*l*u+i*s*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],p=e[8],m=p*a-l*h,_=l*u-p*s,v=h*s-a*u,T=t*m+n*_+i*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=m*E,e[1]=(i*h-p*n)*E,e[2]=(l*n-i*a)*E,e[3]=_*E,e[4]=(p*t-i*u)*E,e[5]=(i*s-l*t)*E,e[6]=v*E,e[7]=(n*u-h*t)*E,e[8]=(a*t-n*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,l){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*l)+a+e,-i*h,i*u,-i*(-h*a+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new ot;function vh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Bs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cd(){const r=Bs("canvas");return r.style.display="block",r}const Nc={};function Oo(r){r in Nc||(Nc[r]=!0,console.warn(r))}function Pd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ld(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dd(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Uc=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){const r={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Bt&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Bt&&(i.r=qr(i.r),i.g=qr(i.g),i.b=qr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yi?zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[yn]:{primaries:e,whitePoint:n,transfer:zo,toXYZ:Uc,fromXYZ:Oc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:Uc,fromXYZ:Oc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),r}const wt=Id();function Ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class Nd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wr===void 0&&(wr=Bs("canvas")),wr.width=e.width,wr.height=e.height;const i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ud=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?s.push(ua(i[a].image)):s.push(ua(i[a]))}else s=ua(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ua(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Od=0;class an extends vr{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,n=Ki,i=Ki,s=Pn,a=bi,l=Fn,u=oi,h=an.DEFAULT_ANISOTROPY,p=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=jn(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=oh;an.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,i=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],p=u[4],m=u[8],_=u[1],v=u[5],T=u[9],E=u[2],y=u[6],x=u[10];if(Math.abs(p-_)<.01&&Math.abs(m-E)<.01&&Math.abs(T-y)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+E)<.1&&Math.abs(T+y)<.1&&Math.abs(h+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,P=(v+1)/2,W=(x+1)/2,k=(p+_)/4,f=(m+E)/4,j=(T+y)/4;return I>P&&I>W?I<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(I),i=k/n,s=f/n):P>W?P<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(P),n=k/i,s=j/i):W<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(W),n=f/s,i=j/s),this.set(n,i,s,t),this}let U=Math.sqrt((y-T)*(y-T)+(m-E)*(m-E)+(_-p)*(_-p));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(m-E)/U,this.z=(_-p)/U,this.w=Math.acos((h+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fd extends vr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $l(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends Fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yh extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bd extends an{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,l){let u=n[i+0],h=n[i+1],p=n[i+2],m=n[i+3];const _=s[a+0],v=s[a+1],T=s[a+2],E=s[a+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(l===1){e[t+0]=_,e[t+1]=v,e[t+2]=T,e[t+3]=E;return}if(m!==E||u!==_||h!==v||p!==T){let y=1-l;const x=u*_+h*v+p*T+m*E,U=x>=0?1:-1,I=1-x*x;if(I>Number.EPSILON){const W=Math.sqrt(I),k=Math.atan2(W,x*U);y=Math.sin(y*k)/W,l=Math.sin(l*k)/W}const P=l*U;if(u=u*y+_*P,h=h*y+v*P,p=p*y+T*P,m=m*y+E*P,y===1-l){const W=1/Math.sqrt(u*u+h*h+p*p+m*m);u*=W,h*=W,p*=W,m*=W}}e[t]=u,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,s,a){const l=n[i],u=n[i+1],h=n[i+2],p=n[i+3],m=s[a],_=s[a+1],v=s[a+2],T=s[a+3];return e[t]=l*T+p*m+u*v-h*_,e[t+1]=u*T+p*_+h*m-l*v,e[t+2]=h*T+p*v+l*_-u*m,e[t+3]=p*T-l*m-u*_-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,l=Math.cos,u=Math.sin,h=l(n/2),p=l(i/2),m=l(s/2),_=u(n/2),v=u(i/2),T=u(s/2);switch(a){case"XYZ":this._x=_*p*m+h*v*T,this._y=h*v*m-_*p*T,this._z=h*p*T+_*v*m,this._w=h*p*m-_*v*T;break;case"YXZ":this._x=_*p*m+h*v*T,this._y=h*v*m-_*p*T,this._z=h*p*T-_*v*m,this._w=h*p*m+_*v*T;break;case"ZXY":this._x=_*p*m-h*v*T,this._y=h*v*m+_*p*T,this._z=h*p*T+_*v*m,this._w=h*p*m-_*v*T;break;case"ZYX":this._x=_*p*m-h*v*T,this._y=h*v*m+_*p*T,this._z=h*p*T-_*v*m,this._w=h*p*m+_*v*T;break;case"YZX":this._x=_*p*m+h*v*T,this._y=h*v*m+_*p*T,this._z=h*p*T-_*v*m,this._w=h*p*m-_*v*T;break;case"XZY":this._x=_*p*m-h*v*T,this._y=h*v*m-_*p*T,this._z=h*p*T+_*v*m,this._w=h*p*m+_*v*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],l=t[5],u=t[9],h=t[2],p=t[6],m=t[10],_=n+l+m;if(_>0){const v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(p-u)*v,this._y=(s-h)*v,this._z=(a-i)*v}else if(n>l&&n>m){const v=2*Math.sqrt(1+n-l-m);this._w=(p-u)/v,this._x=.25*v,this._y=(i+a)/v,this._z=(s+h)/v}else if(l>m){const v=2*Math.sqrt(1+l-n-m);this._w=(s-h)/v,this._x=(i+a)/v,this._y=.25*v,this._z=(u+p)/v}else{const v=2*Math.sqrt(1+m-n-l);this._w=(a-i)/v,this._x=(s+h)/v,this._y=(u+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,l=t._x,u=t._y,h=t._z,p=t._w;return this._x=n*p+a*l+i*h-s*u,this._y=i*p+a*u+s*l-n*h,this._z=s*p+a*h+n*u-i*l,this._w=a*p-n*l-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let l=a*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const v=1-t;return this._w=v*a+t*this._w,this._x=v*n+t*this._x,this._y=v*i+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),p=Math.atan2(h,l),m=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=a*m+this._w*_,this._x=n*m+this._x*_,this._y=i*m+this._y*_,this._z=s*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,l=e.z,u=e.w,h=2*(a*i-l*n),p=2*(l*t-s*i),m=2*(s*n-a*t);return this.x=t+u*h+a*m-l*p,this.y=n+u*p+l*h-s*m,this.z=i+u*m+s*p-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,l=t.y,u=t.z;return this.x=i*u-s*l,this.y=s*a-n*u,this.z=n*l-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ha=new G,Fc=new Yn;class Li{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),Qs.subVectors(this.max,xs),Rr.subVectors(e.a,xs),Cr.subVectors(e.b,xs),Pr.subVectors(e.c,xs),ki.subVectors(Cr,Rr),Hi.subVectors(Pr,Cr),rr.subVectors(Rr,Pr);let t=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-rr.z,rr.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,rr.z,0,-rr.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-rr.y,rr.x,0];return!fa(t,Rr,Cr,Pr,Qs)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Rr,Cr,Pr,Qs))?!1:(eo.crossVectors(ki,Hi),t=[eo.x,eo.y,eo.z],fa(t,Rr,Cr,Pr,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new G,new G,new G,new G,new G,new G,new G,new G],Hn=new G,Js=new Li,Rr=new G,Cr=new G,Pr=new G,ki=new G,Hi=new G,rr=new G,xs=new G,Qs=new G,eo=new G,sr=new G;function fa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){sr.fromArray(r,s);const l=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),u=e.dot(sr),h=t.dot(sr),p=n.dot(sr);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>l)return!1}return!0}const kd=new Li,vs=new G,da=new G;class li{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);const t=vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(da)),this.expandByPoint(vs.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new G,pa=new G,to=new G,zi=new G,ma=new G,no=new G,ga=new G;class Hs{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pa.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(pa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(to),l=zi.dot(this.direction),u=-zi.dot(to),h=zi.lengthSq(),p=Math.abs(1-a*a);let m,_,v,T;if(p>0)if(m=a*u-l,_=a*l-u,T=s*p,m>=0)if(_>=-T)if(_<=T){const E=1/p;m*=E,_*=E,v=m*(m+a*_+2*l)+_*(a*m+_+2*u)+h}else _=s,m=Math.max(0,-(a*_+l)),v=-m*m+_*(_+2*u)+h;else _=-s,m=Math.max(0,-(a*_+l)),v=-m*m+_*(_+2*u)+h;else _<=-T?(m=Math.max(0,-(-a*s+l)),_=m>0?-s:Math.min(Math.max(-s,-u),s),v=-m*m+_*(_+2*u)+h):_<=T?(m=0,_=Math.min(Math.max(-s,-u),s),v=_*(_+2*u)+h):(m=Math.max(0,-(a*s+l)),_=m>0?s:Math.min(Math.max(-s,-u),s),v=-m*m+_*(_+2*u)+h);else _=a>0?-s:s,m=Math.max(0,-(a*_+l)),v=-m*m+_*(_+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(pa).addScaledVector(to,_),v}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,l,u;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return h>=0?(n=(e.min.x-_.x)*h,i=(e.max.x-_.x)*h):(n=(e.max.x-_.x)*h,i=(e.min.x-_.x)*h),p>=0?(s=(e.min.y-_.y)*p,a=(e.max.y-_.y)*p):(s=(e.max.y-_.y)*p,a=(e.min.y-_.y)*p),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),m>=0?(l=(e.min.z-_.z)*m,u=(e.max.z-_.z)*m):(l=(e.max.z-_.z)*m,u=(e.min.z-_.z)*m),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,i,s){ma.subVectors(t,e),no.subVectors(n,e),ga.crossVectors(ma,no);let a=this.direction.dot(ga),l;if(a>0){if(i)return null;l=1}else if(a<0)l=-1,a=-a;else return null;zi.subVectors(this.origin,e);const u=l*this.direction.dot(no.crossVectors(zi,no));if(u<0)return null;const h=l*this.direction.dot(ma.cross(zi));if(h<0||u+h>a)return null;const p=-l*zi.dot(ga);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,s,a,l,u,h,p,m,_,v,T,E,y){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,l,u,h,p,m,_,v,T,E,y)}set(e,t,n,i,s,a,l,u,h,p,m,_,v,T,E,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=a,x[9]=l,x[13]=u,x[2]=h,x[6]=p,x[10]=m,x[14]=_,x[3]=v,x[7]=T,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(i),h=Math.sin(i),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const _=a*p,v=a*m,T=l*p,E=l*m;t[0]=u*p,t[4]=-u*m,t[8]=h,t[1]=v+T*h,t[5]=_-E*h,t[9]=-l*u,t[2]=E-_*h,t[6]=T+v*h,t[10]=a*u}else if(e.order==="YXZ"){const _=u*p,v=u*m,T=h*p,E=h*m;t[0]=_+E*l,t[4]=T*l-v,t[8]=a*h,t[1]=a*m,t[5]=a*p,t[9]=-l,t[2]=v*l-T,t[6]=E+_*l,t[10]=a*u}else if(e.order==="ZXY"){const _=u*p,v=u*m,T=h*p,E=h*m;t[0]=_-E*l,t[4]=-a*m,t[8]=T+v*l,t[1]=v+T*l,t[5]=a*p,t[9]=E-_*l,t[2]=-a*h,t[6]=l,t[10]=a*u}else if(e.order==="ZYX"){const _=a*p,v=a*m,T=l*p,E=l*m;t[0]=u*p,t[4]=T*h-v,t[8]=_*h+E,t[1]=u*m,t[5]=E*h+_,t[9]=v*h-T,t[2]=-h,t[6]=l*u,t[10]=a*u}else if(e.order==="YZX"){const _=a*u,v=a*h,T=l*u,E=l*h;t[0]=u*p,t[4]=E-_*m,t[8]=T*m+v,t[1]=m,t[5]=a*p,t[9]=-l*p,t[2]=-h*p,t[6]=v*m+T,t[10]=_-E*m}else if(e.order==="XZY"){const _=a*u,v=a*h,T=l*u,E=l*h;t[0]=u*p,t[4]=-m,t[8]=h*p,t[1]=_*m+E,t[5]=a*p,t[9]=v*m-T,t[2]=T*m-v,t[6]=l*p,t[10]=E*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hd,e,zd)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Vi.crossVectors(n,Rn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Vi.crossVectors(n,Rn)),Vi.normalize(),io.crossVectors(Rn,Vi),i[0]=Vi.x,i[4]=io.x,i[8]=Rn.x,i[1]=Vi.y,i[5]=io.y,i[9]=Rn.y,i[2]=Vi.z,i[6]=io.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],l=n[4],u=n[8],h=n[12],p=n[1],m=n[5],_=n[9],v=n[13],T=n[2],E=n[6],y=n[10],x=n[14],U=n[3],I=n[7],P=n[11],W=n[15],k=i[0],f=i[4],j=i[8],C=i[12],R=i[1],H=i[5],ue=i[9],Y=i[13],de=i[2],me=i[6],fe=i[10],pe=i[14],se=i[3],Me=i[7],Ie=i[11],Ve=i[15];return s[0]=a*k+l*R+u*de+h*se,s[4]=a*f+l*H+u*me+h*Me,s[8]=a*j+l*ue+u*fe+h*Ie,s[12]=a*C+l*Y+u*pe+h*Ve,s[1]=p*k+m*R+_*de+v*se,s[5]=p*f+m*H+_*me+v*Me,s[9]=p*j+m*ue+_*fe+v*Ie,s[13]=p*C+m*Y+_*pe+v*Ve,s[2]=T*k+E*R+y*de+x*se,s[6]=T*f+E*H+y*me+x*Me,s[10]=T*j+E*ue+y*fe+x*Ie,s[14]=T*C+E*Y+y*pe+x*Ve,s[3]=U*k+I*R+P*de+W*se,s[7]=U*f+I*H+P*me+W*Me,s[11]=U*j+I*ue+P*fe+W*Ie,s[15]=U*C+I*Y+P*pe+W*Ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],l=e[5],u=e[9],h=e[13],p=e[2],m=e[6],_=e[10],v=e[14],T=e[3],E=e[7],y=e[11],x=e[15];return T*(+s*u*m-i*h*m-s*l*_+n*h*_+i*l*v-n*u*v)+E*(+t*u*v-t*h*_+s*a*_-i*a*v+i*h*p-s*u*p)+y*(+t*h*m-t*l*v-s*a*m+n*a*v+s*l*p-n*h*p)+x*(-i*l*p-t*u*m+t*l*_+i*a*m-n*a*_+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],p=e[8],m=e[9],_=e[10],v=e[11],T=e[12],E=e[13],y=e[14],x=e[15],U=m*y*h-E*_*h+E*u*v-l*y*v-m*u*x+l*_*x,I=T*_*h-p*y*h-T*u*v+a*y*v+p*u*x-a*_*x,P=p*E*h-T*m*h+T*l*v-a*E*v-p*l*x+a*m*x,W=T*m*u-p*E*u-T*l*_+a*E*_+p*l*y-a*m*y,k=t*U+n*I+i*P+s*W;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const f=1/k;return e[0]=U*f,e[1]=(E*_*s-m*y*s-E*i*v+n*y*v+m*i*x-n*_*x)*f,e[2]=(l*y*s-E*u*s+E*i*h-n*y*h-l*i*x+n*u*x)*f,e[3]=(m*u*s-l*_*s-m*i*h+n*_*h+l*i*v-n*u*v)*f,e[4]=I*f,e[5]=(p*y*s-T*_*s+T*i*v-t*y*v-p*i*x+t*_*x)*f,e[6]=(T*u*s-a*y*s-T*i*h+t*y*h+a*i*x-t*u*x)*f,e[7]=(a*_*s-p*u*s+p*i*h-t*_*h-a*i*v+t*u*v)*f,e[8]=P*f,e[9]=(T*m*s-p*E*s-T*n*v+t*E*v+p*n*x-t*m*x)*f,e[10]=(a*E*s-T*l*s+T*n*h-t*E*h-a*n*x+t*l*x)*f,e[11]=(p*l*s-a*m*s-p*n*h+t*m*h+a*n*v-t*l*v)*f,e[12]=W*f,e[13]=(p*E*i-T*m*i+T*n*_-t*E*_-p*n*y+t*m*y)*f,e[14]=(T*l*i-a*E*i-T*n*u+t*E*u+a*n*y-t*l*y)*f,e[15]=(a*m*i-p*l*i+p*n*u-t*m*u-a*n*_+t*l*_)*f,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,l=e.y,u=e.z,h=s*a,p=s*l;return this.set(h*a+n,h*l-i*u,h*u+i*l,0,h*l+i*u,p*l+n,p*u-i*a,0,h*u-i*l,p*u+i*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,l=t._z,u=t._w,h=s+s,p=a+a,m=l+l,_=s*h,v=s*p,T=s*m,E=a*p,y=a*m,x=l*m,U=u*h,I=u*p,P=u*m,W=n.x,k=n.y,f=n.z;return i[0]=(1-(E+x))*W,i[1]=(v+P)*W,i[2]=(T-I)*W,i[3]=0,i[4]=(v-P)*k,i[5]=(1-(_+x))*k,i[6]=(y+U)*k,i[7]=0,i[8]=(T+I)*f,i[9]=(y-U)*f,i[10]=(1-(_+E))*f,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Lr.set(i[0],i[1],i[2]).length();const a=Lr.set(i[4],i[5],i[6]).length(),l=Lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],zn.copy(this);const h=1/s,p=1/a,m=1/l;return zn.elements[0]*=h,zn.elements[1]*=h,zn.elements[2]*=h,zn.elements[4]*=p,zn.elements[5]*=p,zn.elements[6]*=p,zn.elements[8]*=m,zn.elements[9]*=m,zn.elements[10]*=m,t.setFromRotationMatrix(zn),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,a,l=Ai){const u=this.elements,h=2*s/(t-e),p=2*s/(n-i),m=(t+e)/(t-e),_=(n+i)/(n-i);let v,T;if(l===Ai)v=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(l===Vo)v=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,a,l=Ai){const u=this.elements,h=1/(t-e),p=1/(n-i),m=1/(a-s),_=(t+e)*h,v=(n+i)*p;let T,E;if(l===Ai)T=(a+s)*m,E=-2*m;else if(l===Vo)T=s*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-v,u[2]=0,u[6]=0,u[10]=E,u[14]=-T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new G,zn=new at,Hd=new G(0,0,0),zd=new G(1,1,1),Vi=new G,io=new G,Rn=new G,Bc=new at,kc=new Yn;class ai{constructor(e=0,t=0,n=0,i=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],l=i[8],u=i[1],h=i[5],p=i[9],m=i[2],_=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kc.setFromEuler(this),this.setFromQuaternion(kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vd=0;const Hc=new G,Dr=new Yn,vi=new at,ro=new G,ys=new G,Gd=new G,Wd=new Yn,zc=new G(1,0,0),Vc=new G(0,1,0),Gc=new G(0,0,1),Wc={type:"added"},Xd={type:"removed"},Ir={type:"childadded",child:null},_a={type:"childremoved",child:null};class Gt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new G,t=new ai,n=new Yn,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new ot}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ys,ro,this.up):vi.lookAt(ro,ys,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix(vi),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wc),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xd),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wc),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?{min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}:void 0,boundingSphere:l.boundingSphere?{radius:l.boundingSphere.radius,center:l.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){const m=u[h];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(s(e.materials,this.material[u]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(s(e.animations,u))}}if(t){const l=a(e.geometries),u=a(e.materials),h=a(e.textures),p=a(e.images),m=a(e.shapes),_=a(e.skeletons),v=a(e.animations),T=a(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),v.length>0&&(n.animations=v),T.length>0&&(n.nodes=T)}return n.object=i,n;function a(l){const u=[];for(const h in l){const p=l[h];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new G(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new G,yi=new G,xa=new G,Mi=new G,Nr=new G,Ur=new G,Xc=new G,va=new G,ya=new G,Ma=new G,Sa=new Dt,Ta=new Dt,Ea=new Dt;class Xn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vn.subVectors(e,t),i.cross(Vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Vn.subVectors(i,t),yi.subVectors(n,t),xa.subVectors(e,t);const a=Vn.dot(Vn),l=Vn.dot(yi),u=Vn.dot(xa),h=yi.dot(yi),p=yi.dot(xa),m=a*h-l*l;if(m===0)return s.set(0,0,0),null;const _=1/m,v=(h*u-l*p)*_,T=(a*p-l*u)*_;return s.set(1-v-T,T,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,i,s,a,l,u){return this.getBarycoord(e,t,n,i,Mi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Mi.x),u.addScaledVector(a,Mi.y),u.addScaledVector(l,Mi.z),u)}static getInterpolatedAttribute(e,t,n,i,s,a){return Sa.setScalar(0),Ta.setScalar(0),Ea.setScalar(0),Sa.fromBufferAttribute(e,t),Ta.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Sa,s.x),a.addScaledVector(Ta,s.y),a.addScaledVector(Ea,s.z),a}static isFrontFacing(e,t,n,i){return Vn.subVectors(n,t),yi.subVectors(e,t),Vn.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Vn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,l;Nr.subVectors(i,n),Ur.subVectors(s,n),va.subVectors(e,n);const u=Nr.dot(va),h=Ur.dot(va);if(u<=0&&h<=0)return t.copy(n);ya.subVectors(e,i);const p=Nr.dot(ya),m=Ur.dot(ya);if(p>=0&&m<=p)return t.copy(i);const _=u*m-p*h;if(_<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(n).addScaledVector(Nr,a);Ma.subVectors(e,s);const v=Nr.dot(Ma),T=Ur.dot(Ma);if(T>=0&&v<=T)return t.copy(s);const E=v*h-u*T;if(E<=0&&h>=0&&T<=0)return l=h/(h-T),t.copy(n).addScaledVector(Ur,l);const y=p*T-v*m;if(y<=0&&m-p>=0&&v-T>=0)return Xc.subVectors(s,i),l=(m-p)/(m-p+(v-T)),t.copy(i).addScaledVector(Xc,l);const x=1/(y+E+_);return a=E*x,l=_*x,t.copy(n).addScaledVector(Nr,a).addScaledVector(Ur,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},so={h:0,s:0,l:0};function ba(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=wt.workingColorSpace){if(e=Kl(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ba(a,s,e+1/3),this.g=ba(a,s,e),this.b=ba(a,s,e-1/3)}return wt.toWorkingColorSpace(this,i),this}setStyle(e,t=on){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],l=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Sh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return wt.fromWorkingColorSpace(hn.copy(this),e),Math.round(pt(hn.r*255,0,255))*65536+Math.round(pt(hn.g*255,0,255))*256+Math.round(pt(hn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,i=hn.g,s=hn.b,a=Math.max(n,i,s),l=Math.min(n,i,s);let u,h;const p=(l+a)/2;if(l===a)u=0,h=0;else{const m=a-l;switch(h=p<=.5?m/(a+l):m/(2-a-l),a){case n:u=(i-s)/m+(i<s?6:0);break;case i:u=(s-n)/m+2;break;case s:u=(n-i)/m+4;break}u/=6}return e.h=u,e.s=h,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=on){wt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,i=hn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(so);const n=Ps(Gi.h,so.h,t),i=Ps(Gi.s,so.s,t),s=Ps(Gi.l,so.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new st;st.NAMES=Sh;let qd=0;class si extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Xr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Za,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const l in s){const u=s[l];delete u.metadata,a.push(u)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ii extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new G,oo=new rt;let jd=0;class vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}class Th extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Eh extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ci extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yd=0;const Nn=new at,Aa=new Gt,Or=new G,Cn=new Li,Ms=new Li,sn=new G;class ci extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vh(e)?Eh:Th)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ci(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Ms.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(Cn.min,Ms.min),Cn.expandByPoint(sn),sn.addVectors(Cn.max,Ms.max),Cn.expandByPoint(sn)):(Cn.expandByPoint(Ms.min),Cn.expandByPoint(Ms.max))}Cn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],u=this.morphTargetsRelative;for(let h=0,p=l.count;h<p;h++)sn.fromBufferAttribute(l,h),u&&(Or.fromBufferAttribute(e,h),sn.add(Or)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],u=[];for(let j=0;j<n.count;j++)l[j]=new G,u[j]=new G;const h=new G,p=new G,m=new G,_=new rt,v=new rt,T=new rt,E=new G,y=new G;function x(j,C,R){h.fromBufferAttribute(n,j),p.fromBufferAttribute(n,C),m.fromBufferAttribute(n,R),_.fromBufferAttribute(s,j),v.fromBufferAttribute(s,C),T.fromBufferAttribute(s,R),p.sub(h),m.sub(h),v.sub(_),T.sub(_);const H=1/(v.x*T.y-T.x*v.y);isFinite(H)&&(E.copy(p).multiplyScalar(T.y).addScaledVector(m,-v.y).multiplyScalar(H),y.copy(m).multiplyScalar(v.x).addScaledVector(p,-T.x).multiplyScalar(H),l[j].add(E),l[C].add(E),l[R].add(E),u[j].add(y),u[C].add(y),u[R].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let j=0,C=U.length;j<C;++j){const R=U[j],H=R.start,ue=R.count;for(let Y=H,de=H+ue;Y<de;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const I=new G,P=new G,W=new G,k=new G;function f(j){W.fromBufferAttribute(i,j),k.copy(W);const C=l[j];I.copy(C),I.sub(W.multiplyScalar(W.dot(C))).normalize(),P.crossVectors(k,C);const H=P.dot(u[j])<0?-1:1;a.setXYZW(j,I.x,I.y,I.z,H)}for(let j=0,C=U.length;j<C;++j){const R=U[j],H=R.start,ue=R.count;for(let Y=H,de=H+ue;Y<de;Y+=3)f(e.getX(Y+0)),f(e.getX(Y+1)),f(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,v=n.count;_<v;_++)n.setXYZ(_,0,0,0);const i=new G,s=new G,a=new G,l=new G,u=new G,h=new G,p=new G,m=new G;if(e)for(let _=0,v=e.count;_<v;_+=3){const T=e.getX(_+0),E=e.getX(_+1),y=e.getX(_+2);i.fromBufferAttribute(t,T),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,y),p.subVectors(a,s),m.subVectors(i,s),p.cross(m),l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),l.add(p),u.add(p),h.add(p),n.setXYZ(T,l.x,l.y,l.z),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,v=t.count;_<v;_+=3)i.fromBufferAttribute(t,_+0),s.fromBufferAttribute(t,_+1),a.fromBufferAttribute(t,_+2),p.subVectors(a,s),m.subVectors(i,s),p.cross(m),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(l,u){const h=l.array,p=l.itemSize,m=l.normalized,_=new h.constructor(u.length*p);let v=0,T=0;for(let E=0,y=u.length;E<y;E++){l.isInterleavedBufferAttribute?v=u[E]*l.data.stride+l.offset:v=u[E]*p;for(let x=0;x<p;x++)_[T++]=h[v++]}return new vn(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],h=e(u,n);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const u=[],h=s[l];for(let p=0,m=h.length;p<m;p++){const _=h[p],v=e(_,n);u.push(v)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],p=[];for(let m=0,_=h.length;m<_;m++){const v=h[m];p.push(v.toJSON(e.data))}p.length>0&&(i[u]=p,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const p=i[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],m=s[h];for(let _=0,v=m.length;_<v;_++)p.push(m[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,p=a.length;h<p;h++){const m=a[h];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qc=new at,or=new Hs,ao=new li,jc=new G,lo=new G,co=new G,uo=new G,wa=new G,ho=new G,Yc=new G,fo=new G;class _n extends Gt{constructor(e=new ci,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){ho.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const p=l[u],m=s[u];p!==0&&(wa.fromBufferAttribute(m,e),a?ho.addScaledVector(wa,p):ho.addScaledVector(wa.sub(t),p))}t.add(ho)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(ao.containsPoint(or.origin)===!1&&(or.intersectSphere(ao,jc)===null||or.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(qc.copy(s).invert(),or.copy(e.ray).applyMatrix4(qc),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,l=s.index,u=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,_=s.groups,v=s.drawRange;if(l!==null)if(Array.isArray(a))for(let T=0,E=_.length;T<E;T++){const y=_[T],x=a[y.materialIndex],U=Math.max(y.start,v.start),I=Math.min(l.count,Math.min(y.start+y.count,v.start+v.count));for(let P=U,W=I;P<W;P+=3){const k=l.getX(P),f=l.getX(P+1),j=l.getX(P+2);i=po(this,x,e,n,h,p,m,k,f,j),i&&(i.faceIndex=Math.floor(P/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const T=Math.max(0,v.start),E=Math.min(l.count,v.start+v.count);for(let y=T,x=E;y<x;y+=3){const U=l.getX(y),I=l.getX(y+1),P=l.getX(y+2);i=po(this,a,e,n,h,p,m,U,I,P),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let T=0,E=_.length;T<E;T++){const y=_[T],x=a[y.materialIndex],U=Math.max(y.start,v.start),I=Math.min(u.count,Math.min(y.start+y.count,v.start+v.count));for(let P=U,W=I;P<W;P+=3){const k=P,f=P+1,j=P+2;i=po(this,x,e,n,h,p,m,k,f,j),i&&(i.faceIndex=Math.floor(P/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const T=Math.max(0,v.start),E=Math.min(u.count,v.start+v.count);for(let y=T,x=E;y<x;y+=3){const U=y,I=y+1,P=y+2;i=po(this,a,e,n,h,p,m,U,I,P),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function Kd(r,e,t,n,i,s,a,l){let u;if(e.side===wn?u=n.intersectTriangle(a,s,i,!0,l):u=n.intersectTriangle(i,s,a,e.side===Pi,l),u===null)return null;fo.copy(l),fo.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(fo);return h<t.near||h>t.far?null:{distance:h,point:fo.clone(),object:r}}function po(r,e,t,n,i,s,a,l,u,h){r.getVertexPosition(l,lo),r.getVertexPosition(u,co),r.getVertexPosition(h,uo);const p=Kd(r,e,t,n,lo,co,uo,Yc);if(p){const m=new G;Xn.getBarycoord(Yc,lo,co,uo,m),i&&(p.uv=Xn.getInterpolatedAttribute(i,l,u,h,m,new rt)),s&&(p.uv1=Xn.getInterpolatedAttribute(s,l,u,h,m,new rt)),a&&(p.normal=Xn.getInterpolatedAttribute(a,l,u,h,m,new G),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:l,b:u,c:h,normal:new G,materialIndex:0};Xn.getNormal(lo,co,uo,_.normal),p.face=_,p.barycoord=m}return p}class rs extends ci{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const l=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],p=[],m=[];let _=0,v=0;T("z","y","x",-1,-1,n,t,e,a,s,0),T("z","y","x",1,-1,n,t,-e,a,s,1),T("x","z","y",1,1,e,n,t,i,a,2),T("x","z","y",1,-1,e,n,-t,i,a,3),T("x","y","z",1,-1,e,t,n,i,s,4),T("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Ci(h,3)),this.setAttribute("normal",new Ci(p,3)),this.setAttribute("uv",new Ci(m,2));function T(E,y,x,U,I,P,W,k,f,j,C){const R=P/f,H=W/j,ue=P/2,Y=W/2,de=k/2,me=f+1,fe=j+1;let pe=0,se=0;const Me=new G;for(let Ie=0;Ie<fe;Ie++){const Ve=Ie*H-Y;for(let lt=0;lt<me;lt++){const Pt=lt*R-ue;Me[E]=Pt*U,Me[y]=Ve*I,Me[x]=de,h.push(Me.x,Me.y,Me.z),Me[E]=0,Me[y]=0,Me[x]=k>0?1:-1,p.push(Me.x,Me.y,Me.z),m.push(lt/f),m.push(1-Ie/j),pe+=1}}for(let Ie=0;Ie<j;Ie++)for(let Ve=0;Ve<f;Ve++){const lt=_+Ve+me*Ie,Pt=_+Ve+me*(Ie+1),ce=_+(Ve+1)+me*(Ie+1),ye=_+(Ve+1)+me*Ie;u.push(lt,Pt,ye),u.push(Pt,ce,ye),se+=6}l.addGroup(v,se,C),v+=se,_+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){const e={};for(let t=0;t<r.length;t++){const n=Qr(r[t]);for(const i in n)e[i]=n[i]}return e}function $d(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function bh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Zd={clone:Qr,merge:mn};var Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=$d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ah extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new G,Kc=new rt,$c=new rt;class gn extends Ah{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Kc,$c),t.subVectors($c,Kc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=-90,Br=1;class ep extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new gn(Fr,Br,e,t);i.layers=this.layers,this.add(i);const s=new gn(Fr,Br,e,t);s.layers=this.layers,this.add(s);const a=new gn(Fr,Br,e,t);a.layers=this.layers,this.add(a);const l=new gn(Fr,Br,e,t);l.layers=this.layers,this.add(l);const u=new gn(Fr,Br,e,t);u.layers=this.layers,this.add(u);const h=new gn(Fr,Br,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,l,u]=t;for(const h of t)this.remove(h);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,u,h,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,i),e.render(t,p),e.setRenderTarget(m,_,v),e.xr.enabled=T,n.texture.needsPMREMUpdate=!0}}class wh extends an{constructor(e=[],t=Kr,n,i,s,a,l,u,h,p){super(e,t,n,i,s,a,l,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tp extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new rs(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Zi});s.uniforms.tEquirect.value=t;const a=new _n(i,s),l=t.minFilter;return t.minFilter===bi&&(t.minFilter=Pn),new ep(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class gr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const np={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,n),x=this._getHandJoint(h,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],_=p.position.distanceTo(m.position),v=.02,T=.005;h.inputState.pinching&&_>v+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=v-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(np)))}return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ip extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new G;class Zl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zc=new G,Jc=new Dt,Qc=new Dt,sp=new G,eu=new at,mo=new G,Ca=new li,tu=new at,Pa=new Hs;class op extends _n{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Li),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingSphere.expandByPoint(mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),e.ray.intersectsSphere(Ca)!==!1&&(tu.copy(i).invert(),Pa.copy(e.ray).applyMatrix4(tu),!(this.boundingBox!==null&&Pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ed?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Jc.fromBufferAttribute(i.attributes.skinIndex,e),Qc.fromBufferAttribute(i.attributes.skinWeight,e),Zc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Qc.getComponent(s);if(a!==0){const l=Jc.getComponent(s);eu.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(sp.copy(Zc).applyMatrix4(eu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rh extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ch extends an{constructor(e=null,t=1,n=1,i,s,a,l,u,h=xn,p=xn,m,_){super(null,a,l,u,h,p,i,s,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=new at,ap=new at;class Jl{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const l=e[s]?e[s].matrixWorld:ap;nu.multiplyMatrices(l,t[s]),nu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Jl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ch(t,e,e,Fn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Rh),this.bones.push(a),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class Ul extends vn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const kr=new at,iu=new at,go=[],ru=new Li,lp=new at,Ss=new _n,Ts=new li;class cp extends _n{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),ru.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(ru)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,kr),Ts.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let l=0;l<n.length;l++)n[l]=i[a+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),e.ray.intersectsSphere(Ts)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,kr),iu.multiplyMatrices(n,kr),Ss.matrixWorld=iu,Ss.raycast(e,go);for(let a=0,l=go.length;a<l;a++){const u=go[a];u.instanceId=s,u.object=this,t.push(u)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ch(new Float32Array(i*this.count),i,this.count,Xl,qn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const l=this.geometry.morphTargetsRelative?1:1-a,u=i*e;s[u]=l,s.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const La=new G,up=new G,hp=new ot;class qi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=La.subVectors(n,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hp.getNormalMatrix(e),i=this.coplanarPoint(La).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new li,_o=new G;class Ql{constructor(e=new qi,t=new qi,n=new qi,i=new qi,s=new qi,a=new qi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai){const n=this.planes,i=e.elements,s=i[0],a=i[1],l=i[2],u=i[3],h=i[4],p=i[5],m=i[6],_=i[7],v=i[8],T=i[9],E=i[10],y=i[11],x=i[12],U=i[13],I=i[14],P=i[15];if(n[0].setComponents(u-s,_-h,y-v,P-x).normalize(),n[1].setComponents(u+s,_+h,y+v,P+x).normalize(),n[2].setComponents(u+a,_+p,y+T,P+U).normalize(),n[3].setComponents(u-a,_-p,y-T,P-U).normalize(),n[4].setComponents(u-l,_-m,y-E,P-I).normalize(),t===Ai)n[5].setComponents(u+l,_+m,y+E,P+I).normalize();else if(t===Vo)n[5].setComponents(l,m,E,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_o.x=i.normal.x>0?e.max.x:e.min.x,_o.y=i.normal.y>0?e.max.y:e.min.y,_o.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ph extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Go=new G,Wo=new G,su=new at,Es=new Hs,xo=new li,Da=new G,ou=new G;class ec extends Gt{constructor(e=new ci,t=new Ph){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Go.fromBufferAttribute(t,i-1),Wo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Go.distanceTo(Wo);e.setAttribute("lineDistance",new Ci(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=s,e.ray.intersectsSphere(xo)===!1)return;su.copy(i).invert(),Es.copy(e.ray).applyMatrix4(su);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,p=n.index,_=n.attributes.position;if(p!==null){const v=Math.max(0,a.start),T=Math.min(p.count,a.start+a.count);for(let E=v,y=T-1;E<y;E+=h){const x=p.getX(E),U=p.getX(E+1),I=vo(this,e,Es,u,x,U,E);I&&t.push(I)}if(this.isLineLoop){const E=p.getX(T-1),y=p.getX(v),x=vo(this,e,Es,u,E,y,T-1);x&&t.push(x)}}else{const v=Math.max(0,a.start),T=Math.min(_.count,a.start+a.count);for(let E=v,y=T-1;E<y;E+=h){const x=vo(this,e,Es,u,E,E+1,E);x&&t.push(x)}if(this.isLineLoop){const E=vo(this,e,Es,u,T-1,v,T-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function vo(r,e,t,n,i,s,a){const l=r.geometry.attributes.position;if(Go.fromBufferAttribute(l,i),Wo.fromBufferAttribute(l,s),t.distanceSqToSegment(Go,Wo,Da,ou)>n)return;Da.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Da);if(!(h<e.near||h>e.far))return{distance:h,point:ou.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const au=new G,lu=new G;class fp extends ec{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)au.fromBufferAttribute(t,i),lu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+au.distanceTo(lu);e.setAttribute("lineDistance",new Ci(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dp extends ec{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Lh extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cu=new at,Ol=new Hs,yo=new li,Mo=new G;class pp extends Gt{constructor(e=new ci,t=new Lh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;cu.copy(i).invert(),Ol.copy(e.ray).applyMatrix4(cu);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,m=n.attributes.position;if(h!==null){const _=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let T=_,E=v;T<E;T++){const y=h.getX(T);Mo.fromBufferAttribute(m,y),uu(Mo,y,u,i,e,t,this)}}else{const _=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let T=_,E=v;T<E;T++)Mo.fromBufferAttribute(m,T),uu(Mo,T,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function uu(r,e,t,n,i,s,a){const l=Ol.distanceSqToPoint(r);if(l<t){const u=new G;Ol.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Dh extends an{constructor(e,t,n=_r,i,s,a,l=xn,u=xn,h,p=Ns){if(p!==Ns&&p!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,a,l,u,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zs extends ci{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,l=Math.floor(n),u=Math.floor(i),h=l+1,p=u+1,m=e/l,_=t/u,v=[],T=[],E=[],y=[];for(let x=0;x<p;x++){const U=x*_-a;for(let I=0;I<h;I++){const P=I*m-s;T.push(P,-U,0),E.push(0,0,1),y.push(I/l),y.push(1-x/u)}}for(let x=0;x<u;x++)for(let U=0;U<l;U++){const I=U+h*x,P=U+h*(x+1),W=U+1+h*(x+1),k=U+1+h*x;v.push(I,P,k),v.push(P,W,k)}this.setIndex(v),this.setAttribute("position",new Ci(T,3)),this.setAttribute("normal",new Ci(E,3)),this.setAttribute("uv",new Ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class tc extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends tc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mp extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gp extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function So(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function _p(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xp(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const l=t[s]*e;for(let u=0;u!==e;++u)i[a++]=r[l+u]}return i}function Ih(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Vs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vp extends Vs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,l=i[s],u=i[a];if(l===void 0)switch(this.getSettings_().endingStart){case Cc:s=e,l=2*t-n;break;case Pc:s=i.length-2,l=t+i[s]-i[s+1];break;default:s=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Cc:a=e,u=2*n-t;break;case Pc:a=1,u=n+i[1]-i[0];break;default:a=e-1,u=t}const h=(n-t)*.5,p=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=s*p,this._offsetNext=a*p}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,p=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,v=this._weightNext,T=(n-t)/(i-t),E=T*T,y=E*T,x=-_*y+2*_*E-_*T,U=(1+_)*y+(-1.5-2*_)*E+(-.5+_)*T+1,I=(-1-v)*y+(1.5+v)*E+.5*T,P=v*y-v*E;for(let W=0;W!==l;++W)s[W]=x*a[p+W]+U*a[h+W]+I*a[u+W]+P*a[m+W];return s}}class yp extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,p=(n-t)/(i-t),m=1-p;for(let _=0;_!==l;++_)s[_]=a[h+_]*m+a[u+_]*p;return s}}class Mp extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const l=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,a),e=!1;break}a=u}if(i!==void 0&&_p(i))for(let l=0,u=i.length;l!==u;++l){const h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,s=e.length-1;let a=1;for(let l=1;l<s;++l){let u=!1;const h=e[l],p=e[l+1];if(h!==p&&(l!==1||h!==e[0]))if(i)u=!0;else{const m=l*n,_=m-n,v=m+n;for(let T=0;T!==n;++T){const E=t[m+T];if(E!==t[_+T]||E!==t[v+T]){u=!0;break}}}if(u){if(l!==a){e[a]=e[l];const m=l*n,_=a*n;for(let v=0;v!==n;++v)t[_+v]=t[m+v]}++a}}if(s>0){e[a]=e[s];for(let l=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[l+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Fs;class ss extends $n{constructor(e,t,n){super(e,t,n)}}ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Os;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Nh extends $n{constructor(e,t,n,i){super(e,t,n,i)}}Nh.prototype.ValueTypeName="color";class es extends $n{constructor(e,t,n,i){super(e,t,n,i)}}es.prototype.ValueTypeName="number";class Sp extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=(n-t)/(i-t);let h=e*l;for(let p=h+l;h!==p;h+=4)Yn.slerpFlat(s,0,a,h-l,a,h,u);return s}}class ts extends $n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sp(this.times,this.values,this.getValueSize(),e)}}ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends $n{constructor(e,t,n){super(e,t,n)}}os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Os;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends $n{constructor(e,t,n,i){super(e,t,n,i)}}ns.prototype.ValueTypeName="vector";class Tp{constructor(e="",t=-1,n=[],i=td){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(bp(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push($n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let l=0;l<s;l++){let u=[],h=[];u.push((l+s-1)%s,l,(l+1)%s),h.push(0,1,0);const p=xp(u);u=hu(u,1,p),h=hu(h,1,p),!i&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new es(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const h=e[l],p=h.name.match(s);if(p&&p.length>1){const m=p[1];let _=i[m];_||(i[m]=_=[]),_.push(h)}}const a=[];for(const l in i)a.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,_,v,T,E){if(v.length!==0){const y=[],x=[];Ih(v,y,x,T),y.length!==0&&E.push(new m(_,y,x))}},i=[],s=e.name||"default",a=e.fps||30,l=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let m=0;m<h.length;m++){const _=h[m].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const v={};let T;for(T=0;T<_.length;T++)if(_[T].morphTargets)for(let E=0;E<_[T].morphTargets.length;E++)v[_[T].morphTargets[E]]=-1;for(const E in v){const y=[],x=[];for(let U=0;U!==_[T].morphTargets.length;++U){const I=_[T];y.push(I.time),x.push(I.morphTarget===E?1:0)}i.push(new es(".morphTargetInfluence["+E+"]",y,x))}u=v.length*a}else{const v=".bones["+t[m].name+"]";n(ns,v+".position",_,"pos",i),n(ts,v+".quaternion",_,"rot",i),n(ns,v+".scale",_,"scl",i)}}return i.length===0?null:new this(s,u,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ep(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Nh;case"quaternion":return ts;case"bool":case"boolean":return ss;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function bp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ep(r.type);if(r.times===void 0){const t=[],n=[];Ih(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const $i={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ap{constructor(e,t,n){const i=this;let s=!1,a=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){l++,s===!1&&i.onStart!==void 0&&i.onStart(p,a,l),s=!0},this.itemEnd=function(p){a++,i.onProgress!==void 0&&i.onProgress(p,a,l),a===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=h.length;m<_;m+=2){const v=h[m],T=h[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return T}return null}}}const wp=new Ap;class yr{constructor(e){this.manager=e!==void 0?e:wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class Rp extends Error{constructor(e,t){super(e),this.response=t}}class nc extends yr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=$i.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:i});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=Si[e],m=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=_?parseInt(_):0,T=v!==0;let E=0;const y=new ReadableStream({start(x){U();function U(){m.read().then(({done:I,value:P})=>{if(I)x.close();else{E+=P.byteLength;const W=new ProgressEvent("progress",{lengthComputable:T,loaded:E,total:v});for(let k=0,f=p.length;k<f;k++){const j=p[k];j.onProgress&&j.onProgress(W)}x.enqueue(P),U()}},I=>{x.error(I)})}}});return new Response(y)}else throw new Rp(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return h.json();default:if(l==="")return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(l),_=m&&m[1]?m[1].toLowerCase():void 0,v=new TextDecoder(_);return h.arrayBuffer().then(T=>v.decode(T))}}}).then(h=>{$i.add(e,h);const p=Si[e];delete Si[e];for(let m=0,_=p.length;m<_;m++){const v=p[m];v.onLoad&&v.onLoad(h)}}).catch(h=>{const p=Si[e];if(p===void 0)throw this.manager.itemError(e),h;delete Si[e];for(let m=0,_=p.length;m<_;m++){const v=p[m];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cp extends yr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$i.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const l=Bs("img");function u(){p(),$i.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(m){p(),i&&i(m),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class Uh extends yr{constructor(e){super(e)}load(e,t,n,i){const s=new an,a=new Cp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ic extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ia=new at,fu=new G,du=new G;class rc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ql,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(fu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pp extends rc{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Jr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lp extends ic{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Pp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pu=new at,bs=new G,Na=new G;class Dp extends rc{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),Na.copy(n.position),Na.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Na),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu)}}class Ip extends ic{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sc extends Ah{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,l-=p*this.view.offsetY,u=l-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Np extends rc{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Up extends ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Np}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ls{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Op extends yr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$i.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const u=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return $i.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),$i.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});$i.add(e,u),s.manager.itemStart(e)}}let To;class Oh{static getContext(){return To===void 0&&(To=new(window.AudioContext||window.webkitAudioContext)),To}static setContext(e){To=e}}class Fp extends yr{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new nc(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(u){try{const h=u.slice(0);Oh.getContext().decodeAudioData(h,function(m){t(m)}).catch(l)}catch(h){l(h)}},n,i);function l(u){i?i(u):console.error(u),s.manager.itemError(e)}}}class Bp extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mu(){return performance.now()}const lr=new G,gu=new Yn,kp=new G,cr=new G;class Hp extends Gt{constructor(){super(),this.type="AudioListener",this.context=Oh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Fh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(lr,gu,kp),cr.set(0,0,-1).applyQuaternion(gu),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(lr.x,i),t.positionY.linearRampToValueAtTime(lr.y,i),t.positionZ.linearRampToValueAtTime(lr.z,i),t.forwardX.linearRampToValueAtTime(cr.x,i),t.forwardY.linearRampToValueAtTime(cr.y,i),t.forwardZ.linearRampToValueAtTime(cr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(lr.x,lr.y,lr.z),t.setOrientation(cr.x,cr.y,cr.z,n.x,n.y,n.z)}}let zp=class extends Gt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}};const oc="\\[\\]\\.:\\/",Vp=new RegExp("["+oc+"]","g"),ac="[^"+oc+"]",Gp="[^"+oc.replace("\\.","")+"]",Wp=/((?:WC+[\/:])*)/.source.replace("WC",ac),Xp=/(WCOD+)?/.source.replace("WCOD",Gp),qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Yp=new RegExp("^"+Wp+Xp+qp+jp+"$"),Kp=["material","materials","bones","map"];class $p{constructor(e,t,n){const i=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ft{constructor(e,t,n){this.path=t,this.parsedPath=n||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ft.Composite(e,t,n):new Ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vp,"")}static parseTrackName(e){const t=Yp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Kp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const l=s[a];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=$p;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _u{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zp extends vr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xu(r,e,t,n){const i=Jp(n);switch(t){case hh:return r*e;case Xl:return r*e/i.components*i.byteLength;case ql:return r*e/i.components*i.byteLength;case dh:return r*e*2/i.components*i.byteLength;case jl:return r*e*2/i.components*i.byteLength;case fh:return r*e*3/i.components*i.byteLength;case Fn:return r*e*4/i.components*i.byteLength;case Yl:return r*e*4/i.components*i.byteLength;case Lo:case Do:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Io:case No:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ll:case ul:return Math.max(r,16)*Math.max(e,8)/4;case al:case cl:return Math.max(r,8)*Math.max(e,8)/2;case hl:case fl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Uo:case Rl:case Cl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ph:case Pl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ll:case Dl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jp(r){switch(r){case oi:case lh:return{byteLength:1,components:1};case Ds:case ch:case ks:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case _r:case Vl:case qn:return{byteLength:4,components:1};case uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Qp(r){const e=new WeakMap;function t(l,u){const h=l.array,p=l.usage,m=h.byteLength,_=r.createBuffer();r.bindBuffer(u,_),r.bufferData(u,h,p),l.onUploadCallback();let v;if(h instanceof Float32Array)v=r.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=r.SHORT;else if(h instanceof Uint32Array)v=r.UNSIGNED_INT;else if(h instanceof Int32Array)v=r.INT;else if(h instanceof Int8Array)v=r.BYTE;else if(h instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,u,h){const p=u.array,m=u.updateRanges;if(r.bindBuffer(h,l),m.length===0)r.bufferSubData(h,0,p);else{m.sort((v,T)=>v.start-T.start);let _=0;for(let v=1;v<m.length;v++){const T=m[_],E=m[v];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++_,m[_]=E)}m.length=_+1;for(let v=0,T=m.length;v<T;v++){const E=m[v];r.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(r.deleteBuffer(u.buffer),e.delete(l))}function a(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:i,remove:s,update:a}}var em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,om=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ig=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,L_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:em,alphahash_pars_fragment:tm,alphamap_fragment:nm,alphamap_pars_fragment:im,alphatest_fragment:rm,alphatest_pars_fragment:sm,aomap_fragment:om,aomap_pars_fragment:am,batching_pars_vertex:lm,batching_vertex:cm,begin_vertex:um,beginnormal_vertex:hm,bsdfs:fm,iridescence_fragment:dm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:gm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:xm,color_fragment:vm,color_pars_fragment:ym,color_pars_vertex:Mm,color_vertex:Sm,common:Tm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:bm,displacementmap_pars_vertex:Am,displacementmap_vertex:wm,emissivemap_fragment:Rm,emissivemap_pars_fragment:Cm,colorspace_fragment:Pm,colorspace_pars_fragment:Lm,envmap_fragment:Dm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Nm,envmap_pars_vertex:Um,envmap_physical_pars_fragment:qm,envmap_vertex:Om,fog_vertex:Fm,fog_pars_vertex:Bm,fog_fragment:km,fog_pars_fragment:Hm,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Vm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Wm,lights_pars_begin:Xm,lights_toon_fragment:jm,lights_toon_pars_fragment:Ym,lights_phong_fragment:Km,lights_phong_pars_fragment:$m,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:Qm,lights_fragment_maps:eg,lights_fragment_end:tg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:ig,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:sg,map_fragment:og,map_pars_fragment:ag,map_particle_fragment:lg,map_particle_pars_fragment:cg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphinstance_vertex:fg,morphcolor_vertex:dg,morphnormal_vertex:pg,morphtarget_pars_vertex:mg,morphtarget_vertex:gg,normal_fragment_begin:_g,normal_fragment_maps:xg,normal_pars_fragment:vg,normal_pars_vertex:yg,normal_vertex:Mg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:Ag,opaque_fragment:wg,packing:Rg,premultiplied_alpha_fragment:Cg,project_vertex:Pg,dithering_fragment:Lg,dithering_pars_fragment:Dg,roughnessmap_fragment:Ig,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:Ug,shadowmap_pars_vertex:Og,shadowmap_vertex:Fg,shadowmask_pars_fragment:Bg,skinbase_vertex:kg,skinning_pars_vertex:Hg,skinning_vertex:zg,skinnormal_vertex:Vg,specularmap_fragment:Gg,specularmap_pars_fragment:Wg,tonemapping_fragment:Xg,tonemapping_pars_fragment:qg,transmission_fragment:jg,transmission_pars_fragment:Yg,uv_pars_fragment:Kg,uv_pars_vertex:$g,uv_vertex:Zg,worldpos_vertex:Jg,background_vert:Qg,background_frag:e_,backgroundCube_vert:t_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:r_,depth_vert:s_,depth_frag:o_,distanceRGBA_vert:a_,distanceRGBA_frag:l_,equirect_vert:c_,equirect_frag:u_,linedashed_vert:h_,linedashed_frag:f_,meshbasic_vert:d_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:__,meshmatcap_frag:x_,meshnormal_vert:v_,meshnormal_frag:y_,meshphong_vert:M_,meshphong_frag:S_,meshphysical_vert:T_,meshphysical_frag:E_,meshtoon_vert:b_,meshtoon_frag:A_,points_vert:w_,points_frag:R_,shadow_vert:C_,shadow_frag:P_,sprite_vert:L_,sprite_frag:D_},Te={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ni={basic:{uniforms:mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:mn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:mn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new st(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:mn([Te.points,Te.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:mn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:mn([Te.common,Te.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:mn([Te.sprite,Te.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:mn([Te.common,Te.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:mn([Te.lights,Te.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};ni.physical={uniforms:mn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Eo={r:0,b:0,g:0},ur=new ai,I_=new at;function N_(r,e,t,n,i,s,a){const l=new st(0);let u=s===!0?0:1,h,p,m=null,_=0,v=null;function T(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?t:e).get(P)),P}function E(I){let P=!1;const W=T(I);W===null?x(l,u):W&&W.isColor&&(x(W,1),P=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(I,P){const W=T(P);W&&(W.isCubeTexture||W.mapping===Xo)?(p===void 0&&(p=new _n(new rs(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Qr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,f,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),ur.copy(P.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.material.uniforms.envMap.value=W,p.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(ur)),p.material.toneMapped=wt.getTransfer(W.colorSpace)!==Bt,(m!==W||_!==W.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,m=W,_=W.version,v=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):W&&W.isTexture&&(h===void 0&&(h=new _n(new zs(2,2),new Qi({name:"BackgroundMaterial",uniforms:Qr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=W,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=wt.getTransfer(W.colorSpace)!==Bt,W.matrixAutoUpdate===!0&&W.updateMatrix(),h.material.uniforms.uvTransform.value.copy(W.matrix),(m!==W||_!==W.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,m=W,_=W.version,v=r.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function x(I,P){I.getRGB(Eo,bh(r)),n.buffers.color.setClear(Eo.r,Eo.g,Eo.b,P,a)}function U(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(I,P=1){l.set(I),u=P,x(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(I){u=I,x(l,u)},render:E,addToRenderList:y,dispose:U}}function U_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=_(null);let s=i,a=!1;function l(R,H,ue,Y,de){let me=!1;const fe=m(Y,ue,H);s!==fe&&(s=fe,h(s.object)),me=v(R,Y,ue,de),me&&T(R,Y,ue,de),de!==null&&e.update(de,r.ELEMENT_ARRAY_BUFFER),(me||a)&&(a=!1,P(R,H,ue,Y),de!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function u(){return r.createVertexArray()}function h(R){return r.bindVertexArray(R)}function p(R){return r.deleteVertexArray(R)}function m(R,H,ue){const Y=ue.wireframe===!0;let de=n[R.id];de===void 0&&(de={},n[R.id]=de);let me=de[H.id];me===void 0&&(me={},de[H.id]=me);let fe=me[Y];return fe===void 0&&(fe=_(u()),me[Y]=fe),fe}function _(R){const H=[],ue=[],Y=[];for(let de=0;de<t;de++)H[de]=0,ue[de]=0,Y[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ue,attributeDivisors:Y,object:R,attributes:{},index:null}}function v(R,H,ue,Y){const de=s.attributes,me=H.attributes;let fe=0;const pe=ue.getAttributes();for(const se in pe)if(pe[se].location>=0){const Ie=de[se];let Ve=me[se];if(Ve===void 0&&(se==="instanceMatrix"&&R.instanceMatrix&&(Ve=R.instanceMatrix),se==="instanceColor"&&R.instanceColor&&(Ve=R.instanceColor)),Ie===void 0||Ie.attribute!==Ve||Ve&&Ie.data!==Ve.data)return!0;fe++}return s.attributesNum!==fe||s.index!==Y}function T(R,H,ue,Y){const de={},me=H.attributes;let fe=0;const pe=ue.getAttributes();for(const se in pe)if(pe[se].location>=0){let Ie=me[se];Ie===void 0&&(se==="instanceMatrix"&&R.instanceMatrix&&(Ie=R.instanceMatrix),se==="instanceColor"&&R.instanceColor&&(Ie=R.instanceColor));const Ve={};Ve.attribute=Ie,Ie&&Ie.data&&(Ve.data=Ie.data),de[se]=Ve,fe++}s.attributes=de,s.attributesNum=fe,s.index=Y}function E(){const R=s.newAttributes;for(let H=0,ue=R.length;H<ue;H++)R[H]=0}function y(R){x(R,0)}function x(R,H){const ue=s.newAttributes,Y=s.enabledAttributes,de=s.attributeDivisors;ue[R]=1,Y[R]===0&&(r.enableVertexAttribArray(R),Y[R]=1),de[R]!==H&&(r.vertexAttribDivisor(R,H),de[R]=H)}function U(){const R=s.newAttributes,H=s.enabledAttributes;for(let ue=0,Y=H.length;ue<Y;ue++)H[ue]!==R[ue]&&(r.disableVertexAttribArray(ue),H[ue]=0)}function I(R,H,ue,Y,de,me,fe){fe===!0?r.vertexAttribIPointer(R,H,ue,de,me):r.vertexAttribPointer(R,H,ue,Y,de,me)}function P(R,H,ue,Y){E();const de=Y.attributes,me=ue.getAttributes(),fe=H.defaultAttributeValues;for(const pe in me){const se=me[pe];if(se.location>=0){let Me=de[pe];if(Me===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor)),Me!==void 0){const Ie=Me.normalized,Ve=Me.itemSize,lt=e.get(Me);if(lt===void 0)continue;const Pt=lt.buffer,ce=lt.type,ye=lt.bytesPerElement,Fe=ce===r.INT||ce===r.UNSIGNED_INT||Me.gpuType===Vl;if(Me.isInterleavedBufferAttribute){const be=Me.data,Ke=be.stride,Et=Me.offset;if(be.isInstancedInterleavedBuffer){for(let He=0;He<se.locationSize;He++)x(se.location+He,be.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let He=0;He<se.locationSize;He++)y(se.location+He);r.bindBuffer(r.ARRAY_BUFFER,Pt);for(let He=0;He<se.locationSize;He++)I(se.location+He,Ve/se.locationSize,ce,Ie,Ke*ye,(Et+Ve/se.locationSize*He)*ye,Fe)}else{if(Me.isInstancedBufferAttribute){for(let be=0;be<se.locationSize;be++)x(se.location+be,Me.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let be=0;be<se.locationSize;be++)y(se.location+be);r.bindBuffer(r.ARRAY_BUFFER,Pt);for(let be=0;be<se.locationSize;be++)I(se.location+be,Ve/se.locationSize,ce,Ie,Ve*ye,Ve/se.locationSize*be*ye,Fe)}}else if(fe!==void 0){const Ie=fe[pe];if(Ie!==void 0)switch(Ie.length){case 2:r.vertexAttrib2fv(se.location,Ie);break;case 3:r.vertexAttrib3fv(se.location,Ie);break;case 4:r.vertexAttrib4fv(se.location,Ie);break;default:r.vertexAttrib1fv(se.location,Ie)}}}}U()}function W(){j();for(const R in n){const H=n[R];for(const ue in H){const Y=H[ue];for(const de in Y)p(Y[de].object),delete Y[de];delete H[ue]}delete n[R]}}function k(R){if(n[R.id]===void 0)return;const H=n[R.id];for(const ue in H){const Y=H[ue];for(const de in Y)p(Y[de].object),delete Y[de];delete H[ue]}delete n[R.id]}function f(R){for(const H in n){const ue=n[H];if(ue[R.id]===void 0)continue;const Y=ue[R.id];for(const de in Y)p(Y[de].object),delete Y[de];delete ue[R.id]}}function j(){C(),a=!0,s!==i&&(s=i,h(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:j,resetDefaultState:C,dispose:W,releaseStatesOfGeometry:k,releaseStatesOfProgram:f,initAttributes:E,enableAttribute:y,disableUnusedAttributes:U}}function O_(r,e,t){let n;function i(h){n=h}function s(h,p){r.drawArrays(n,h,p),t.update(p,n,1)}function a(h,p,m){m!==0&&(r.drawArraysInstanced(n,h,p,m),t.update(p,n,m))}function l(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,m);let v=0;for(let T=0;T<m;T++)v+=p[T];t.update(v,n,1)}function u(h,p,m,_){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let T=0;T<h.length;T++)a(h[T],p[T],_[T]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,p,0,_,0,m);let T=0;for(let E=0;E<m;E++)T+=p[E]*_[E];t.update(T,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function F_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const f=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(f){return!(f!==Fn&&n.convert(f)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(f){const j=f===ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(f!==oi&&n.convert(f)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&f!==qn&&!j)}function u(f){if(f==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=u(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),W=T>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:v,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:P,vertexTextures:W,maxSamples:k}}function B_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new qi,l=new ot,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const v=m.length!==0||_||n!==0||i;return i=_,n=m.length,v},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,v){const T=m.clippingPlanes,E=m.clipIntersection,y=m.clipShadows,x=r.get(m);if(!i||T===null||T.length===0||s&&!y)s?p(null):h();else{const U=s?0:n,I=U*4;let P=x.clippingState||null;u.value=P,P=p(T,_,I,v);for(let W=0;W!==I;++W)P[W]=t[W];x.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=U}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,_,v,T){const E=m!==null?m.length:0;let y=null;if(E!==0){if(y=u.value,T!==!0||y===null){const x=v+E*4,U=_.matrixWorldInverse;l.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let I=0,P=v;I!==E;++I,P+=4)a.copy(m[I]).applyMatrix4(U,l),a.normal.toArray(y,P),y[P+3]=a.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function k_(r){let e=new WeakMap;function t(a,l){return l===sl?a.mapping=Kr:l===ol&&(a.mapping=$r),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===sl||l===ol)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new tp(u.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const l=a.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Gr=4,vu=[.125,.215,.35,.446,.526,.582],mr=20,Ua=new sc,yu=new st;let Oa=null,Fa=0,Ba=0,ka=!1;const dr=(1+Math.sqrt(5))/2,Hr=1/dr,Mu=[new G(-dr,Hr,0),new G(dr,Hr,0),new G(-Hr,0,dr),new G(Hr,0,dr),new G(0,dr,-Hr),new G(0,dr,Hr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],H_=new G;class Su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:l=H_}=s;Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,i,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Fa,Ba),this._renderer.xr.enabled=ka,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ks,format:Fn,colorSpace:yn,depthBuffer:!1},i=Tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z_(s)),this._blurMaterial=V_(s,e,t)}return i}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,i,s){const u=new gn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(yu),m.toneMapping=Ji,m.autoClear=!1;const T=new ii({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),E=new _n(new rs,T);let y=!1;const x=e.background;x?x.isColor&&(T.color.copy(x),e.background=null,y=!0):(T.color.copy(yu),y=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(u.up.set(0,h[U],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+p[U],s.y,s.z)):I===1?(u.up.set(0,0,h[U]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+p[U],s.z)):(u.up.set(0,h[U],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+p[U]));const P=this._cubeSize;bo(i,I*P,U>2?P:0,P,P),m.setRenderTarget(i),y&&m.render(E,u),m.render(e,u)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Kr||e.mapping===$r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new _n(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;bo(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Mu[(i-s-1)%Mu.length];this._blur(e,s-1,s,a,l)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,l){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new _n(this._lodPlanes[i],h),_=h.uniforms,v=this._sizeLods[n]-1,T=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*mr-1),E=s/T,y=isFinite(s)?1+Math.floor(p*E):mr;y>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${mr}`);const x=[];let U=0;for(let f=0;f<mr;++f){const j=f/E,C=Math.exp(-j*j/2);x.push(C),f===0?U+=C:f<y&&(U+=2*C)}for(let f=0;f<x.length;f++)x[f]=x[f]/U;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=a==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:I}=this;_.dTheta.value=T,_.mipInt.value=I-n;const P=this._sizeLods[i],W=3*P*(i>I-Gr?i-I+Gr:0),k=4*(this._cubeSize-P);bo(t,W,k,3*P,2*P),u.setRenderTarget(t),u.render(m,Ua)}}function z_(r){const e=[],t=[],n=[];let i=r;const s=r-Gr+1+vu.length;for(let a=0;a<s;a++){const l=Math.pow(2,i);t.push(l);let u=1/l;a>r-Gr?u=vu[a-r+Gr-1]:a===0&&(u=0),n.push(u);const h=1/(l-2),p=-h,m=1+h,_=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,T=6,E=3,y=2,x=1,U=new Float32Array(E*T*v),I=new Float32Array(y*T*v),P=new Float32Array(x*T*v);for(let k=0;k<v;k++){const f=k%3*2/3-1,j=k>2?0:-1,C=[f,j,0,f+2/3,j,0,f+2/3,j+1,0,f,j,0,f+2/3,j+1,0,f,j+1,0];U.set(C,E*T*k),I.set(_,y*T*k);const R=[k,k,k,k,k,k];P.set(R,x*T*k)}const W=new ci;W.setAttribute("position",new vn(U,E)),W.setAttribute("uv",new vn(I,y)),W.setAttribute("faceIndex",new vn(P,x)),e.push(W),i>Gr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tu(r,e,t){const n=new xr(r,e,t);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function V_(r,e,t){const n=new Float32Array(mr),i=new G(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Eu(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function bu(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function G_(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,h=u===sl||u===ol,p=u===Kr||u===$r;if(h||p){let m=e.get(l);const _=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==_)return t===null&&(t=new Su(r)),m=h?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const v=l.image;return h&&v&&v.height>0||p&&v&&i(v)?(t===null&&(t=new Su(r)),m=h?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",s),m.texture):null}}}return l}function i(l){let u=0;const h=6;for(let p=0;p<h;p++)l[p]!==void 0&&u++;return u===h}function s(l){const u=l.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function W_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Oo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function X_(r,e,t,n){const i={},s=new WeakMap;function a(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",a),delete i[_.id];const v=s.get(_);v&&(e.remove(v),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(m,_){return i[_.id]===!0||(_.addEventListener("dispose",a),i[_.id]=!0,t.memory.geometries++),_}function u(m){const _=m.attributes;for(const v in _)e.update(_[v],r.ARRAY_BUFFER)}function h(m){const _=[],v=m.index,T=m.attributes.position;let E=0;if(v!==null){const U=v.array;E=v.version;for(let I=0,P=U.length;I<P;I+=3){const W=U[I+0],k=U[I+1],f=U[I+2];_.push(W,k,k,f,f,W)}}else if(T!==void 0){const U=T.array;E=T.version;for(let I=0,P=U.length/3-1;I<P;I+=3){const W=I+0,k=I+1,f=I+2;_.push(W,k,k,f,f,W)}}else return;const y=new(vh(_)?Eh:Th)(_,1);y.version=E;const x=s.get(m);x&&e.remove(x),s.set(m,y)}function p(m){const _=s.get(m);if(_){const v=m.index;v!==null&&_.version<v.version&&h(m)}else h(m);return s.get(m)}return{get:l,update:u,getWireframeAttribute:p}}function q_(r,e,t){let n;function i(_){n=_}let s,a;function l(_){s=_.type,a=_.bytesPerElement}function u(_,v){r.drawElements(n,v,s,_*a),t.update(v,n,1)}function h(_,v,T){T!==0&&(r.drawElementsInstanced(n,v,s,_*a,T),t.update(v,n,T))}function p(_,v,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,s,_,0,T);let y=0;for(let x=0;x<T;x++)y+=v[x];t.update(y,n,1)}function m(_,v,T,E){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)h(_[x]/a,v[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(n,v,0,s,_,0,E,0,T);let x=0;for(let U=0;U<T;U++)x+=v[U]*E[U];t.update(x,n,1)}}this.setMode=i,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function j_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Y_(r,e,t){const n=new WeakMap,i=new Dt;function s(a,l,u){const h=a.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=p!==void 0?p.length:0;let _=n.get(l);if(_===void 0||_.count!==m){let R=function(){j.dispose(),n.delete(l),l.removeEventListener("dispose",R)};var v=R;_!==void 0&&_.texture.dispose();const T=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],U=l.morphAttributes.normal||[],I=l.morphAttributes.color||[];let P=0;T===!0&&(P=1),E===!0&&(P=2),y===!0&&(P=3);let W=l.attributes.position.count*P,k=1;W>e.maxTextureSize&&(k=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const f=new Float32Array(W*k*4*m),j=new yh(f,W,k,m);j.type=qn,j.needsUpdate=!0;const C=P*4;for(let H=0;H<m;H++){const ue=x[H],Y=U[H],de=I[H],me=W*k*4*H;for(let fe=0;fe<ue.count;fe++){const pe=fe*C;T===!0&&(i.fromBufferAttribute(ue,fe),f[me+pe+0]=i.x,f[me+pe+1]=i.y,f[me+pe+2]=i.z,f[me+pe+3]=0),E===!0&&(i.fromBufferAttribute(Y,fe),f[me+pe+4]=i.x,f[me+pe+5]=i.y,f[me+pe+6]=i.z,f[me+pe+7]=0),y===!0&&(i.fromBufferAttribute(de,fe),f[me+pe+8]=i.x,f[me+pe+9]=i.y,f[me+pe+10]=i.z,f[me+pe+11]=de.itemSize===4?i.w:1)}}_={count:m,texture:j,size:new rt(W,k)},n.set(l,_),l.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let T=0;for(let y=0;y<h.length;y++)T+=h[y];const E=l.morphTargetsRelative?1:1-T;u.getUniforms().setValue(r,"morphTargetBaseInfluence",E),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:s}}function K_(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,p=u.geometry,m=e.get(u,p);if(i.get(m)!==h&&(e.update(m),i.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const _=u.skeleton;i.get(_)!==h&&(_.update(),i.set(_,h))}return m}function a(){i=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}const kh=new an,Au=new Dh(1,1),Hh=new yh,zh=new Bd,Vh=new wh,wu=[],Ru=[],Cu=new Float32Array(16),Pu=new Float32Array(9),Lu=new Float32Array(4);function as(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=wu[i];if(s===void 0&&(s=new Float32Array(i),wu[i]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,r[a].toArray(s,l)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function qo(r,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function J_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function Q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function ex(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Lu.set(n),r.uniformMatrix2fv(this.addr,!1,Lu),tn(t,n)}}function tx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Pu.set(n),r.uniformMatrix3fv(this.addr,!1,Pu),tn(t,n)}}function nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Cu.set(n),r.uniformMatrix4fv(this.addr,!1,Cu),tn(t,n)}}function ix(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function ax(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function cx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function hx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Au.compareFunction=_h,s=Au):s=kh,t.setTexture2D(e||s,i)}function fx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zh,i)}function dx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vh,i)}function px(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hh,i)}function mx(r){switch(r){case 5126:return $_;case 35664:return Z_;case 35665:return J_;case 35666:return Q_;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return sx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(r,e){r.uniform1fv(this.addr,e)}function _x(r,e){const t=as(e,this.size,2);r.uniform2fv(this.addr,t)}function xx(r,e){const t=as(e,this.size,3);r.uniform3fv(this.addr,t)}function vx(r,e){const t=as(e,this.size,4);r.uniform4fv(this.addr,t)}function yx(r,e){const t=as(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Mx(r,e){const t=as(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Sx(r,e){const t=as(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Tx(r,e){r.uniform1iv(this.addr,e)}function Ex(r,e){r.uniform2iv(this.addr,e)}function bx(r,e){r.uniform3iv(this.addr,e)}function Ax(r,e){r.uniform4iv(this.addr,e)}function wx(r,e){r.uniform1uiv(this.addr,e)}function Rx(r,e){r.uniform2uiv(this.addr,e)}function Cx(r,e){r.uniform3uiv(this.addr,e)}function Px(r,e){r.uniform4uiv(this.addr,e)}function Lx(r,e,t){const n=this.cache,i=e.length,s=qo(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||kh,s[a])}function Dx(r,e,t){const n=this.cache,i=e.length,s=qo(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zh,s[a])}function Ix(r,e,t){const n=this.cache,i=e.length,s=qo(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Vh,s[a])}function Nx(r,e,t){const n=this.cache,i=e.length,s=qo(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hh,s[a])}function Ux(r){switch(r){case 5126:return gx;case 35664:return _x;case 35665:return xx;case 35666:return vx;case 35674:return yx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return Tx;case 35667:case 35671:return Ex;case 35668:case 35672:return bx;case 35669:case 35673:return Ax;case 5125:return wx;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Nx}}class Ox{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mx(t.type)}}class Fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ux(t.type)}}class Bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Du(r,e){r.seq.push(e),r.map[e.id]=e}function kx(r,e,t){const n=r.name,i=n.length;for(Ha.lastIndex=0;;){const s=Ha.exec(n),a=Ha.lastIndex;let l=s[1];const u=s[2]==="]",h=s[3];if(u&&(l=l|0),h===void 0||h==="["&&a+2===i){Du(t,h===void 0?new Ox(l,r,e):new Fx(l,r,e));break}else{let m=t.map[l];m===void 0&&(m=new Bx(l),Du(t,m)),t=m}}}class Fo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);kx(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Iu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Hx=37297;let zx=0;function Vx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const Nu=new ot;function Gx(r){wt._getMatrix(Nu,wt.workingColorSpace,r);const e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case zo:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Uu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Vx(r.getShaderSource(e),a)}else return i}function Wx(r,e){const t=Gx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xx(r,e){let t;switch(e){case jf:t="Linear";break;case Yf:t="Reinhard";break;case Kf:t="Cineon";break;case $f:t="ACESFilmic";break;case Jf:t="AgX";break;case Qf:t="Neutral";break;case Zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ao=new G;function qx(){wt.getLuminanceCoefficients(Ao);const r=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Yx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:l}}return t}function Rs(r){return r!==""}function Ou(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(r){return r.replace($x,Jx)}const Zx=new Map;function Jx(r,e){let t=ut[e];if(t===void 0){const n=Zx.get(e);if(n!==void 0)t=ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fl(t)}const Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(r){return r.replace(Qx,ev)}function ev(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ku(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Af?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function nv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Kr:case $r:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function rv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case Xf:e="ENVMAP_BLENDING_MIX";break;case qf:e="ENVMAP_BLENDING_ADD";break}return e}function sv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ov(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const u=tv(t),h=nv(t),p=iv(t),m=rv(t),_=sv(t),v=jx(t),T=Yx(s),E=i.createProgram();let y,x,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Rs).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Rs).join(`
`),x.length>0&&(x+=`
`)):(y=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),x=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ji?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Wx("linearToOutputTexel",t.outputColorSpace),qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Fl(a),a=Ou(a,t),a=Fu(a,t),l=Fl(l),l=Ou(l,t),l=Fu(l,t),a=Bu(a),l=Bu(l),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=U+y+a,P=U+x+l,W=Iu(i,i.VERTEX_SHADER,I),k=Iu(i,i.FRAGMENT_SHADER,P);i.attachShader(E,W),i.attachShader(E,k),t.index0AttributeName!==void 0?i.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(E,0,"position"),i.linkProgram(E);function f(H){if(r.debug.checkShaderErrors){const ue=i.getProgramInfoLog(E).trim(),Y=i.getShaderInfoLog(W).trim(),de=i.getShaderInfoLog(k).trim();let me=!0,fe=!0;if(i.getProgramParameter(E,i.LINK_STATUS)===!1)if(me=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,E,W,k);else{const pe=Uu(i,W,"vertex"),se=Uu(i,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(E,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ue+`
`+pe+`
`+se)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(Y===""||de==="")&&(fe=!1);fe&&(H.diagnostics={runnable:me,programLog:ue,vertexShader:{log:Y,prefix:y},fragmentShader:{log:de,prefix:x}})}i.deleteShader(W),i.deleteShader(k),j=new Fo(i,E),C=Kx(i,E)}let j;this.getUniforms=function(){return j===void 0&&f(this),j};let C;this.getAttributes=function(){return C===void 0&&f(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(E,Hx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=W,this.fragmentShader=k,this}let av=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cv(e),t.set(e,n)),n}}class cv{constructor(e){this.id=av++,this.code=e,this.usedTimes=0}}function uv(r,e,t,n,i,s,a){const l=new Mh,u=new lv,h=new Set,p=[],m=i.logarithmicDepthBuffer,_=i.vertexTextures;let v=i.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return h.add(C),C===0?"uv":`uv${C}`}function y(C,R,H,ue,Y){const de=ue.fog,me=Y.geometry,fe=C.isMeshStandardMaterial?ue.environment:null,pe=(C.isMeshStandardMaterial?t:e).get(C.envMap||fe),se=pe&&pe.mapping===Xo?pe.image.height:null,Me=T[C.type];C.precision!==null&&(v=i.getMaxPrecision(C.precision),v!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",v,"instead."));const Ie=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,Ve=Ie!==void 0?Ie.length:0;let lt=0;me.morphAttributes.position!==void 0&&(lt=1),me.morphAttributes.normal!==void 0&&(lt=2),me.morphAttributes.color!==void 0&&(lt=3);let Pt,ce,ye,Fe;if(Me){const Lt=ni[Me];Pt=Lt.vertexShader,ce=Lt.fragmentShader}else Pt=C.vertexShader,ce=C.fragmentShader,u.update(C),ye=u.getVertexShaderID(C),Fe=u.getFragmentShaderID(C);const be=r.getRenderTarget(),Ke=r.state.buffers.depth.getReversed(),Et=Y.isInstancedMesh===!0,He=Y.isBatchedMesh===!0,Xt=!!C.map,It=!!C.matcap,ht=!!pe,F=!!C.aoMap,Mn=!!C.lightMap,mt=!!C.bumpMap,ft=!!C.normalMap,Oe=!!C.displacementMap,Ht=!!C.emissiveMap,Ge=!!C.metalnessMap,D=!!C.roughnessMap,A=C.anisotropy>0,$=C.clearcoat>0,le=C.dispersion>0,Z=C.iridescence>0,re=C.sheen>0,ke=C.transmission>0,Ae=A&&!!C.anisotropyMap,$e=$&&!!C.clearcoatMap,Ze=$&&!!C.clearcoatNormalMap,_e=$&&!!C.clearcoatRoughnessMap,De=Z&&!!C.iridescenceMap,ze=Z&&!!C.iridescenceThicknessMap,je=re&&!!C.sheenColorMap,Le=re&&!!C.sheenRoughnessMap,Mt=!!C.specularMap,nt=!!C.specularColorMap,Nt=!!C.specularIntensityMap,V=ke&&!!C.transmissionMap,we=ke&&!!C.thicknessMap,ie=!!C.gradientMap,he=!!C.alphaMap,Re=C.alphaTest>0,Ee=!!C.alphaHash,qe=!!C.extensions;let gt=Ji;C.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(gt=r.toneMapping);const Yt={shaderID:Me,shaderType:C.type,shaderName:C.name,vertexShader:Pt,fragmentShader:ce,defines:C.defines,customVertexShaderID:ye,customFragmentShaderID:Fe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:v,batching:He,batchingColor:He&&Y._colorsTexture!==null,instancing:Et,instancingColor:Et&&Y.instanceColor!==null,instancingMorph:Et&&Y.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:yn,alphaToCoverage:!!C.alphaToCoverage,map:Xt,matcap:It,envMap:ht,envMapMode:ht&&pe.mapping,envMapCubeUVHeight:se,aoMap:F,lightMap:Mn,bumpMap:mt,normalMap:ft,displacementMap:_&&Oe,emissiveMap:Ht,normalMapObjectSpace:ft&&C.normalMapType===sd,normalMapTangentSpace:ft&&C.normalMapType===gh,metalnessMap:Ge,roughnessMap:D,anisotropy:A,anisotropyMap:Ae,clearcoat:$,clearcoatMap:$e,clearcoatNormalMap:Ze,clearcoatRoughnessMap:_e,dispersion:le,iridescence:Z,iridescenceMap:De,iridescenceThicknessMap:ze,sheen:re,sheenColorMap:je,sheenRoughnessMap:Le,specularMap:Mt,specularColorMap:nt,specularIntensityMap:Nt,transmission:ke,transmissionMap:V,thicknessMap:we,gradientMap:ie,opaque:C.transparent===!1&&C.blending===Xr&&C.alphaToCoverage===!1,alphaMap:he,alphaTest:Re,alphaHash:Ee,combine:C.combine,mapUv:Xt&&E(C.map.channel),aoMapUv:F&&E(C.aoMap.channel),lightMapUv:Mn&&E(C.lightMap.channel),bumpMapUv:mt&&E(C.bumpMap.channel),normalMapUv:ft&&E(C.normalMap.channel),displacementMapUv:Oe&&E(C.displacementMap.channel),emissiveMapUv:Ht&&E(C.emissiveMap.channel),metalnessMapUv:Ge&&E(C.metalnessMap.channel),roughnessMapUv:D&&E(C.roughnessMap.channel),anisotropyMapUv:Ae&&E(C.anisotropyMap.channel),clearcoatMapUv:$e&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:je&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Le&&E(C.sheenRoughnessMap.channel),specularMapUv:Mt&&E(C.specularMap.channel),specularColorMapUv:nt&&E(C.specularColorMap.channel),specularIntensityMapUv:Nt&&E(C.specularIntensityMap.channel),transmissionMapUv:V&&E(C.transmissionMap.channel),thicknessMapUv:we&&E(C.thicknessMap.channel),alphaMapUv:he&&E(C.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(ft||A),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!me.attributes.uv&&(Xt||he),fog:!!de,useFog:C.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Ke,skinning:Y.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:lt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,decodeVideoTexture:Xt&&C.map.isVideoTexture===!0&&wt.getTransfer(C.map.colorSpace)===Bt,decodeVideoTextureEmissive:Ht&&C.emissiveMap.isVideoTexture===!0&&wt.getTransfer(C.emissiveMap.colorSpace)===Bt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Gn,flipSided:C.side===wn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:qe&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&C.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Yt.vertexUv1s=h.has(1),Yt.vertexUv2s=h.has(2),Yt.vertexUv3s=h.has(3),h.clear(),Yt}function x(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)R.push(H),R.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(U(R,C),I(R,C),R.push(r.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function U(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function I(C,R){l.disableAll(),R.supportsVertexTextures&&l.enable(0),R.instancing&&l.enable(1),R.instancingColor&&l.enable(2),R.instancingMorph&&l.enable(3),R.matcap&&l.enable(4),R.envMap&&l.enable(5),R.normalMapObjectSpace&&l.enable(6),R.normalMapTangentSpace&&l.enable(7),R.clearcoat&&l.enable(8),R.iridescence&&l.enable(9),R.alphaTest&&l.enable(10),R.vertexColors&&l.enable(11),R.vertexAlphas&&l.enable(12),R.vertexUv1s&&l.enable(13),R.vertexUv2s&&l.enable(14),R.vertexUv3s&&l.enable(15),R.vertexTangents&&l.enable(16),R.anisotropy&&l.enable(17),R.alphaHash&&l.enable(18),R.batching&&l.enable(19),R.dispersion&&l.enable(20),R.batchingColor&&l.enable(21),C.push(l.mask),l.disableAll(),R.fog&&l.enable(0),R.useFog&&l.enable(1),R.flatShading&&l.enable(2),R.logarithmicDepthBuffer&&l.enable(3),R.reverseDepthBuffer&&l.enable(4),R.skinning&&l.enable(5),R.morphTargets&&l.enable(6),R.morphNormals&&l.enable(7),R.morphColors&&l.enable(8),R.premultipliedAlpha&&l.enable(9),R.shadowMapEnabled&&l.enable(10),R.doubleSided&&l.enable(11),R.flipSided&&l.enable(12),R.useDepthPacking&&l.enable(13),R.dithering&&l.enable(14),R.transmission&&l.enable(15),R.sheen&&l.enable(16),R.opaque&&l.enable(17),R.pointsUvs&&l.enable(18),R.decodeVideoTexture&&l.enable(19),R.decodeVideoTextureEmissive&&l.enable(20),R.alphaToCoverage&&l.enable(21),C.push(l.mask)}function P(C){const R=T[C.type];let H;if(R){const ue=ni[R];H=Zd.clone(ue.uniforms)}else H=C.uniforms;return H}function W(C,R){let H;for(let ue=0,Y=p.length;ue<Y;ue++){const de=p[ue];if(de.cacheKey===R){H=de,++H.usedTimes;break}}return H===void 0&&(H=new ov(r,R,C,s),p.push(H)),H}function k(C){if(--C.usedTimes===0){const R=p.indexOf(C);p[R]=p[p.length-1],p.pop(),C.destroy()}}function f(C){u.remove(C)}function j(){u.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:P,acquireProgram:W,releaseProgram:k,releaseShaderCache:f,programs:p,dispose:j}}function hv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let l=r.get(a);return l===void 0&&(l={},r.set(a,l)),l}function n(a){r.delete(a)}function i(a,l,u){r.get(a)[l]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function fv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(m,_,v,T,E,y){let x=r[e];return x===void 0?(x={id:m.id,object:m,geometry:_,material:v,groupOrder:T,renderOrder:m.renderOrder,z:E,group:y},r[e]=x):(x.id=m.id,x.object=m,x.geometry=_,x.material=v,x.groupOrder=T,x.renderOrder=m.renderOrder,x.z=E,x.group=y),e++,x}function l(m,_,v,T,E,y){const x=a(m,_,v,T,E,y);v.transmission>0?n.push(x):v.transparent===!0?i.push(x):t.push(x)}function u(m,_,v,T,E,y){const x=a(m,_,v,T,E,y);v.transmission>0?n.unshift(x):v.transparent===!0?i.unshift(x):t.unshift(x)}function h(m,_){t.length>1&&t.sort(m||fv),n.length>1&&n.sort(_||Hu),i.length>1&&i.sort(_||Hu)}function p(){for(let m=e,_=r.length;m<_;m++){const v=r[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:p,sort:h}}function dv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new zu,r.set(n,[a])):i>=s.length?(a=new zu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function pv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new st};break;case"SpotLight":t={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function mv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let gv=0;function _v(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function xv(r){const e=new pv,t=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new G);const i=new G,s=new at,a=new at;function l(h){let p=0,m=0,_=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,T=0,E=0,y=0,x=0,U=0,I=0,P=0,W=0,k=0,f=0;h.sort(_v);for(let C=0,R=h.length;C<R;C++){const H=h[C],ue=H.color,Y=H.intensity,de=H.distance,me=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)p+=ue.r*Y,m+=ue.g*Y,_+=ue.b*Y;else if(H.isLightProbe){for(let fe=0;fe<9;fe++)n.probe[fe].addScaledVector(H.sh.coefficients[fe],Y);f++}else if(H.isDirectionalLight){const fe=e.get(H);if(fe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const pe=H.shadow,se=t.get(H);se.shadowIntensity=pe.intensity,se.shadowBias=pe.bias,se.shadowNormalBias=pe.normalBias,se.shadowRadius=pe.radius,se.shadowMapSize=pe.mapSize,n.directionalShadow[v]=se,n.directionalShadowMap[v]=me,n.directionalShadowMatrix[v]=H.shadow.matrix,U++}n.directional[v]=fe,v++}else if(H.isSpotLight){const fe=e.get(H);fe.position.setFromMatrixPosition(H.matrixWorld),fe.color.copy(ue).multiplyScalar(Y),fe.distance=de,fe.coneCos=Math.cos(H.angle),fe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),fe.decay=H.decay,n.spot[E]=fe;const pe=H.shadow;if(H.map&&(n.spotLightMap[W]=H.map,W++,pe.updateMatrices(H),H.castShadow&&k++),n.spotLightMatrix[E]=pe.matrix,H.castShadow){const se=t.get(H);se.shadowIntensity=pe.intensity,se.shadowBias=pe.bias,se.shadowNormalBias=pe.normalBias,se.shadowRadius=pe.radius,se.shadowMapSize=pe.mapSize,n.spotShadow[E]=se,n.spotShadowMap[E]=me,P++}E++}else if(H.isRectAreaLight){const fe=e.get(H);fe.color.copy(ue).multiplyScalar(Y),fe.halfWidth.set(H.width*.5,0,0),fe.halfHeight.set(0,H.height*.5,0),n.rectArea[y]=fe,y++}else if(H.isPointLight){const fe=e.get(H);if(fe.color.copy(H.color).multiplyScalar(H.intensity),fe.distance=H.distance,fe.decay=H.decay,H.castShadow){const pe=H.shadow,se=t.get(H);se.shadowIntensity=pe.intensity,se.shadowBias=pe.bias,se.shadowNormalBias=pe.normalBias,se.shadowRadius=pe.radius,se.shadowMapSize=pe.mapSize,se.shadowCameraNear=pe.camera.near,se.shadowCameraFar=pe.camera.far,n.pointShadow[T]=se,n.pointShadowMap[T]=me,n.pointShadowMatrix[T]=H.shadow.matrix,I++}n.point[T]=fe,T++}else if(H.isHemisphereLight){const fe=e.get(H);fe.skyColor.copy(H.color).multiplyScalar(Y),fe.groundColor.copy(H.groundColor).multiplyScalar(Y),n.hemi[x]=fe,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=_;const j=n.hash;(j.directionalLength!==v||j.pointLength!==T||j.spotLength!==E||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==U||j.numPointShadows!==I||j.numSpotShadows!==P||j.numSpotMaps!==W||j.numLightProbes!==f)&&(n.directional.length=v,n.spot.length=E,n.rectArea.length=y,n.point.length=T,n.hemi.length=x,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=P+W-k,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=f,j.directionalLength=v,j.pointLength=T,j.spotLength=E,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=U,j.numPointShadows=I,j.numSpotShadows=P,j.numSpotMaps=W,j.numLightProbes=f,n.version=gv++)}function u(h,p){let m=0,_=0,v=0,T=0,E=0;const y=p.matrixWorldInverse;for(let x=0,U=h.length;x<U;x++){const I=h[x];if(I.isDirectionalLight){const P=n.directional[m];P.direction.setFromMatrixPosition(I.matrixWorld),i.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(y),m++}else if(I.isSpotLight){const P=n.spot[v];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(I.matrixWorld),i.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(i),P.direction.transformDirection(y),v++}else if(I.isRectAreaLight){const P=n.rectArea[T];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(y),a.identity(),s.copy(I.matrixWorld),s.premultiply(y),a.extractRotation(s),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),T++}else if(I.isPointLight){const P=n.point[_];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(y),_++}else if(I.isHemisphereLight){const P=n.hemi[E];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(y),E++}}}return{setup:l,setupView:u,state:n}}function Vu(r){const e=new xv(r),t=[],n=[];function i(p){h.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function a(p){n.push(p)}function l(){e.setup(t)}function u(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function vv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let l;return a===void 0?(l=new Vu(r),e.set(i,[l])):s>=a.length?(l=new Vu(r),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sv(r,e,t){let n=new Ql;const i=new rt,s=new rt,a=new Dt,l=new mp({depthPacking:rd}),u=new gp,h={},p=t.maxTextureSize,m={[Pi]:wn,[wn]:Pi,[Gn]:Gn},_=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:yv,fragmentShader:Mv}),v=_.clone();v.defines.HORIZONTAL_PASS=1;const T=new ci;T.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new _n(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let x=this.type;this.render=function(k,f,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const C=r.getRenderTarget(),R=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),ue=r.state;ue.setBlending(Zi),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const Y=x!==Ti&&this.type===Ti,de=x===Ti&&this.type!==Ti;for(let me=0,fe=k.length;me<fe;me++){const pe=k[me],se=pe.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;i.copy(se.mapSize);const Me=se.getFrameExtents();if(i.multiply(Me),s.copy(se.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(s.x=Math.floor(p/Me.x),i.x=s.x*Me.x,se.mapSize.x=s.x),i.y>p&&(s.y=Math.floor(p/Me.y),i.y=s.y*Me.y,se.mapSize.y=s.y)),se.map===null||Y===!0||de===!0){const Ve=this.type!==Ti?{minFilter:xn,magFilter:xn}:{};se.map!==null&&se.map.dispose(),se.map=new xr(i.x,i.y,Ve),se.map.texture.name=pe.name+".shadowMap",se.camera.updateProjectionMatrix()}r.setRenderTarget(se.map),r.clear();const Ie=se.getViewportCount();for(let Ve=0;Ve<Ie;Ve++){const lt=se.getViewport(Ve);a.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),ue.viewport(a),se.updateMatrices(pe,Ve),n=se.getFrustum(),P(f,j,se.camera,pe,this.type)}se.isPointLightShadow!==!0&&this.type===Ti&&U(se,j),se.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(C,R,H)};function U(k,f){const j=e.update(E);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,v.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new xr(i.x,i.y)),_.uniforms.shadow_pass.value=k.map.texture,_.uniforms.resolution.value=k.mapSize,_.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(f,null,j,_,E,null),v.uniforms.shadow_pass.value=k.mapPass.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(f,null,j,v,E,null)}function I(k,f,j,C){let R=null;const H=j.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(H!==void 0)R=H;else if(R=j.isPointLight===!0?u:l,r.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){const ue=R.uuid,Y=f.uuid;let de=h[ue];de===void 0&&(de={},h[ue]=de);let me=de[Y];me===void 0&&(me=R.clone(),de[Y]=me,f.addEventListener("dispose",W)),R=me}if(R.visible=f.visible,R.wireframe=f.wireframe,C===Ti?R.side=f.shadowSide!==null?f.shadowSide:f.side:R.side=f.shadowSide!==null?f.shadowSide:m[f.side],R.alphaMap=f.alphaMap,R.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,R.map=f.map,R.clipShadows=f.clipShadows,R.clippingPlanes=f.clippingPlanes,R.clipIntersection=f.clipIntersection,R.displacementMap=f.displacementMap,R.displacementScale=f.displacementScale,R.displacementBias=f.displacementBias,R.wireframeLinewidth=f.wireframeLinewidth,R.linewidth=f.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ue=r.properties.get(R);ue.light=j}return R}function P(k,f,j,C,R){if(k.visible===!1)return;if(k.layers.test(f.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===Ti)&&(!k.frustumCulled||n.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,k.matrixWorld);const Y=e.update(k),de=k.material;if(Array.isArray(de)){const me=Y.groups;for(let fe=0,pe=me.length;fe<pe;fe++){const se=me[fe],Me=de[se.materialIndex];if(Me&&Me.visible){const Ie=I(k,Me,C,R);k.onBeforeShadow(r,k,f,j,Y,Ie,se),r.renderBufferDirect(j,null,Y,Ie,k,se),k.onAfterShadow(r,k,f,j,Y,Ie,se)}}}else if(de.visible){const me=I(k,de,C,R);k.onBeforeShadow(r,k,f,j,Y,me,null),r.renderBufferDirect(j,null,Y,me,k,null),k.onAfterShadow(r,k,f,j,Y,me,null)}}const ue=k.children;for(let Y=0,de=ue.length;Y<de;Y++)P(ue[Y],f,j,C,R)}function W(k){k.target.removeEventListener("dispose",W);for(const j in h){const C=h[j],R=k.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const Tv={[Ja]:Qa,[el]:il,[tl]:rl,[Yr]:nl,[Qa]:Ja,[il]:el,[rl]:tl,[nl]:Yr};function Ev(r,e){function t(){let V=!1;const we=new Dt;let ie=null;const he=new Dt(0,0,0,0);return{setMask:function(Re){ie!==Re&&!V&&(r.colorMask(Re,Re,Re,Re),ie=Re)},setLocked:function(Re){V=Re},setClear:function(Re,Ee,qe,gt,Yt){Yt===!0&&(Re*=gt,Ee*=gt,qe*=gt),we.set(Re,Ee,qe,gt),he.equals(we)===!1&&(r.clearColor(Re,Ee,qe,gt),he.copy(we))},reset:function(){V=!1,ie=null,he.set(-1,0,0,0)}}}function n(){let V=!1,we=!1,ie=null,he=null,Re=null;return{setReversed:function(Ee){if(we!==Ee){const qe=e.get("EXT_clip_control");Ee?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),we=Ee;const gt=Re;Re=null,this.setClear(gt)}},getReversed:function(){return we},setTest:function(Ee){Ee?be(r.DEPTH_TEST):Ke(r.DEPTH_TEST)},setMask:function(Ee){ie!==Ee&&!V&&(r.depthMask(Ee),ie=Ee)},setFunc:function(Ee){if(we&&(Ee=Tv[Ee]),he!==Ee){switch(Ee){case Ja:r.depthFunc(r.NEVER);break;case Qa:r.depthFunc(r.ALWAYS);break;case el:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case tl:r.depthFunc(r.EQUAL);break;case nl:r.depthFunc(r.GEQUAL);break;case il:r.depthFunc(r.GREATER);break;case rl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=Ee}},setLocked:function(Ee){V=Ee},setClear:function(Ee){Re!==Ee&&(we&&(Ee=1-Ee),r.clearDepth(Ee),Re=Ee)},reset:function(){V=!1,ie=null,he=null,Re=null,we=!1}}}function i(){let V=!1,we=null,ie=null,he=null,Re=null,Ee=null,qe=null,gt=null,Yt=null;return{setTest:function(Lt){V||(Lt?be(r.STENCIL_TEST):Ke(r.STENCIL_TEST))},setMask:function(Lt){we!==Lt&&!V&&(r.stencilMask(Lt),we=Lt)},setFunc:function(Lt,Sn,Ln){(ie!==Lt||he!==Sn||Re!==Ln)&&(r.stencilFunc(Lt,Sn,Ln),ie=Lt,he=Sn,Re=Ln)},setOp:function(Lt,Sn,Ln){(Ee!==Lt||qe!==Sn||gt!==Ln)&&(r.stencilOp(Lt,Sn,Ln),Ee=Lt,qe=Sn,gt=Ln)},setLocked:function(Lt){V=Lt},setClear:function(Lt){Yt!==Lt&&(r.clearStencil(Lt),Yt=Lt)},reset:function(){V=!1,we=null,ie=null,he=null,Re=null,Ee=null,qe=null,gt=null,Yt=null}}}const s=new t,a=new n,l=new i,u=new WeakMap,h=new WeakMap;let p={},m={},_=new WeakMap,v=[],T=null,E=!1,y=null,x=null,U=null,I=null,P=null,W=null,k=null,f=new st(0,0,0),j=0,C=!1,R=null,H=null,ue=null,Y=null,de=null;const me=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,pe=0;const se=r.getParameter(r.VERSION);se.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(se)[1]),fe=pe>=1):se.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),fe=pe>=2);let Me=null,Ie={};const Ve=r.getParameter(r.SCISSOR_BOX),lt=r.getParameter(r.VIEWPORT),Pt=new Dt().fromArray(Ve),ce=new Dt().fromArray(lt);function ye(V,we,ie,he){const Re=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(V,Ee),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<ie;qe++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(we+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return Ee}const Fe={};Fe[r.TEXTURE_2D]=ye(r.TEXTURE_2D,r.TEXTURE_2D,1),Fe[r.TEXTURE_CUBE_MAP]=ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[r.TEXTURE_2D_ARRAY]=ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Fe[r.TEXTURE_3D]=ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),be(r.DEPTH_TEST),a.setFunc(Yr),mt(!1),ft(Tc),be(r.CULL_FACE),F(Zi);function be(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function Ke(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function Et(V,we){return m[V]!==we?(r.bindFramebuffer(V,we),m[V]=we,V===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=we),V===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=we),!0):!1}function He(V,we){let ie=v,he=!1;if(V){ie=_.get(we),ie===void 0&&(ie=[],_.set(we,ie));const Re=V.textures;if(ie.length!==Re.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,qe=Re.length;Ee<qe;Ee++)ie[Ee]=r.COLOR_ATTACHMENT0+Ee;ie.length=Re.length,he=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,he=!0);he&&r.drawBuffers(ie)}function Xt(V){return T!==V?(r.useProgram(V),T=V,!0):!1}const It={[pr]:r.FUNC_ADD,[Rf]:r.FUNC_SUBTRACT,[Cf]:r.FUNC_REVERSE_SUBTRACT};It[Pf]=r.MIN,It[Lf]=r.MAX;const ht={[Df]:r.ZERO,[If]:r.ONE,[Nf]:r.SRC_COLOR,[$a]:r.SRC_ALPHA,[Hf]:r.SRC_ALPHA_SATURATE,[Bf]:r.DST_COLOR,[Of]:r.DST_ALPHA,[Uf]:r.ONE_MINUS_SRC_COLOR,[Za]:r.ONE_MINUS_SRC_ALPHA,[kf]:r.ONE_MINUS_DST_COLOR,[Ff]:r.ONE_MINUS_DST_ALPHA,[zf]:r.CONSTANT_COLOR,[Vf]:r.ONE_MINUS_CONSTANT_COLOR,[Gf]:r.CONSTANT_ALPHA,[Wf]:r.ONE_MINUS_CONSTANT_ALPHA};function F(V,we,ie,he,Re,Ee,qe,gt,Yt,Lt){if(V===Zi){E===!0&&(Ke(r.BLEND),E=!1);return}if(E===!1&&(be(r.BLEND),E=!0),V!==wf){if(V!==y||Lt!==C){if((x!==pr||P!==pr)&&(r.blendEquation(r.FUNC_ADD),x=pr,P=pr),Lt)switch(V){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ec:r.blendFunc(r.ONE,r.ONE);break;case bc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ac:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ec:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ac:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}U=null,I=null,W=null,k=null,f.set(0,0,0),j=0,y=V,C=Lt}return}Re=Re||we,Ee=Ee||ie,qe=qe||he,(we!==x||Re!==P)&&(r.blendEquationSeparate(It[we],It[Re]),x=we,P=Re),(ie!==U||he!==I||Ee!==W||qe!==k)&&(r.blendFuncSeparate(ht[ie],ht[he],ht[Ee],ht[qe]),U=ie,I=he,W=Ee,k=qe),(gt.equals(f)===!1||Yt!==j)&&(r.blendColor(gt.r,gt.g,gt.b,Yt),f.copy(gt),j=Yt),y=V,C=!1}function Mn(V,we){V.side===Gn?Ke(r.CULL_FACE):be(r.CULL_FACE);let ie=V.side===wn;we&&(ie=!ie),mt(ie),V.blending===Xr&&V.transparent===!1?F(Zi):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const he=V.stencilWrite;l.setTest(he),he&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ht(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):Ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(V){R!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),R=V)}function ft(V){V!==Ef?(be(r.CULL_FACE),V!==H&&(V===Tc?r.cullFace(r.BACK):V===bf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ke(r.CULL_FACE),H=V}function Oe(V){V!==ue&&(fe&&r.lineWidth(V),ue=V)}function Ht(V,we,ie){V?(be(r.POLYGON_OFFSET_FILL),(Y!==we||de!==ie)&&(r.polygonOffset(we,ie),Y=we,de=ie)):Ke(r.POLYGON_OFFSET_FILL)}function Ge(V){V?be(r.SCISSOR_TEST):Ke(r.SCISSOR_TEST)}function D(V){V===void 0&&(V=r.TEXTURE0+me-1),Me!==V&&(r.activeTexture(V),Me=V)}function A(V,we,ie){ie===void 0&&(Me===null?ie=r.TEXTURE0+me-1:ie=Me);let he=Ie[ie];he===void 0&&(he={type:void 0,texture:void 0},Ie[ie]=he),(he.type!==V||he.texture!==we)&&(Me!==ie&&(r.activeTexture(ie),Me=ie),r.bindTexture(V,we||Fe[V]),he.type=V,he.texture=we)}function $(){const V=Ie[Me];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function le(){try{r.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{r.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{r.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{r.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{r.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{r.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{r.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{r.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{r.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(V){Pt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Pt.copy(V))}function Le(V){ce.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),ce.copy(V))}function Mt(V,we){let ie=h.get(we);ie===void 0&&(ie=new WeakMap,h.set(we,ie));let he=ie.get(V);he===void 0&&(he=r.getUniformBlockIndex(we,V.name),ie.set(V,he))}function nt(V,we){const he=h.get(we).get(V);u.get(we)!==he&&(r.uniformBlockBinding(we,he,V.__bindingPointIndex),u.set(we,he))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},Me=null,Ie={},m={},_=new WeakMap,v=[],T=null,E=!1,y=null,x=null,U=null,I=null,P=null,W=null,k=null,f=new st(0,0,0),j=0,C=!1,R=null,H=null,ue=null,Y=null,de=null,Pt.set(0,0,r.canvas.width,r.canvas.height),ce.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:be,disable:Ke,bindFramebuffer:Et,drawBuffers:He,useProgram:Xt,setBlending:F,setMaterial:Mn,setFlipSided:mt,setCullFace:ft,setLineWidth:Oe,setPolygonOffset:Ht,setScissorTest:Ge,activeTexture:D,bindTexture:A,unbindTexture:$,compressedTexImage2D:le,compressedTexImage3D:Z,texImage2D:De,texImage3D:ze,updateUBOMapping:Mt,uniformBlockBinding:nt,texStorage2D:Ze,texStorage3D:_e,texSubImage2D:re,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:$e,scissor:je,viewport:Le,reset:Nt}}function bv(r,e,t,n,i,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new rt,p=new WeakMap;let m;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,A){return v?new OffscreenCanvas(D,A):Bs("canvas")}function E(D,A,$){let le=1;const Z=Ge(D);if((Z.width>$||Z.height>$)&&(le=$/Math.max(Z.width,Z.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const re=Math.floor(le*Z.width),ke=Math.floor(le*Z.height);m===void 0&&(m=T(re,ke));const Ae=A?T(re,ke):m;return Ae.width=re,Ae.height=ke,Ae.getContext("2d").drawImage(D,0,0,re,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+re+"x"+ke+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function y(D){return D.generateMipmaps}function x(D){r.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(D,A,$,le,Z=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let re=A;if(A===r.RED&&($===r.FLOAT&&(re=r.R32F),$===r.HALF_FLOAT&&(re=r.R16F),$===r.UNSIGNED_BYTE&&(re=r.R8)),A===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(re=r.R8UI),$===r.UNSIGNED_SHORT&&(re=r.R16UI),$===r.UNSIGNED_INT&&(re=r.R32UI),$===r.BYTE&&(re=r.R8I),$===r.SHORT&&(re=r.R16I),$===r.INT&&(re=r.R32I)),A===r.RG&&($===r.FLOAT&&(re=r.RG32F),$===r.HALF_FLOAT&&(re=r.RG16F),$===r.UNSIGNED_BYTE&&(re=r.RG8)),A===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(re=r.RG8UI),$===r.UNSIGNED_SHORT&&(re=r.RG16UI),$===r.UNSIGNED_INT&&(re=r.RG32UI),$===r.BYTE&&(re=r.RG8I),$===r.SHORT&&(re=r.RG16I),$===r.INT&&(re=r.RG32I)),A===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(re=r.RGB8UI),$===r.UNSIGNED_SHORT&&(re=r.RGB16UI),$===r.UNSIGNED_INT&&(re=r.RGB32UI),$===r.BYTE&&(re=r.RGB8I),$===r.SHORT&&(re=r.RGB16I),$===r.INT&&(re=r.RGB32I)),A===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(re=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(re=r.RGBA16UI),$===r.UNSIGNED_INT&&(re=r.RGBA32UI),$===r.BYTE&&(re=r.RGBA8I),$===r.SHORT&&(re=r.RGBA16I),$===r.INT&&(re=r.RGBA32I)),A===r.RGB&&$===r.UNSIGNED_INT_5_9_9_9_REV&&(re=r.RGB9_E5),A===r.RGBA){const ke=Z?zo:wt.getTransfer(le);$===r.FLOAT&&(re=r.RGBA32F),$===r.HALF_FLOAT&&(re=r.RGBA16F),$===r.UNSIGNED_BYTE&&(re=ke===Bt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function P(D,A){let $;return D?A===null||A===_r||A===Is?$=r.DEPTH24_STENCIL8:A===qn?$=r.DEPTH32F_STENCIL8:A===Ds&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_r||A===Is?$=r.DEPTH_COMPONENT24:A===qn?$=r.DEPTH_COMPONENT32F:A===Ds&&($=r.DEPTH_COMPONENT16),$}function W(D,A){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==Pn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function k(D){const A=D.target;A.removeEventListener("dispose",k),j(A),A.isVideoTexture&&p.delete(A)}function f(D){const A=D.target;A.removeEventListener("dispose",f),R(A)}function j(D){const A=n.get(D);if(A.__webglInit===void 0)return;const $=D.source,le=_.get($);if(le){const Z=le[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(D),Object.keys(le).length===0&&_.delete($)}n.remove(D)}function C(D){const A=n.get(D);r.deleteTexture(A.__webglTexture);const $=D.source,le=_.get($);delete le[A.__cacheKey],a.memory.textures--}function R(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(A.__webglFramebuffer[le]))for(let Z=0;Z<A.__webglFramebuffer[le].length;Z++)r.deleteFramebuffer(A.__webglFramebuffer[le][Z]);else r.deleteFramebuffer(A.__webglFramebuffer[le]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[le])}else{if(Array.isArray(A.__webglFramebuffer))for(let le=0;le<A.__webglFramebuffer.length;le++)r.deleteFramebuffer(A.__webglFramebuffer[le]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let le=0;le<A.__webglColorRenderbuffer.length;le++)A.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[le]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=D.textures;for(let le=0,Z=$.length;le<Z;le++){const re=n.get($[le]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove($[le])}n.remove(D)}let H=0;function ue(){H=0}function Y(){const D=H;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),H+=1,D}function de(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function me(D,A){const $=n.get(D);if(D.isVideoTexture&&Oe(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const le=D.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce($,D,A);return}}t.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+A)}function fe(D,A){const $=n.get(D);if(D.version>0&&$.__version!==D.version){ce($,D,A);return}t.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+A)}function pe(D,A){const $=n.get(D);if(D.version>0&&$.__version!==D.version){ce($,D,A);return}t.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+A)}function se(D,A){const $=n.get(D);if(D.version>0&&$.__version!==D.version){ye($,D,A);return}t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+A)}const Me={[Zr]:r.REPEAT,[Ki]:r.CLAMP_TO_EDGE,[Ho]:r.MIRRORED_REPEAT},Ie={[xn]:r.NEAREST,[ah]:r.NEAREST_MIPMAP_NEAREST,[ws]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[Po]:r.LINEAR_MIPMAP_NEAREST,[bi]:r.LINEAR_MIPMAP_LINEAR},Ve={[od]:r.NEVER,[fd]:r.ALWAYS,[ad]:r.LESS,[_h]:r.LEQUAL,[ld]:r.EQUAL,[hd]:r.GEQUAL,[cd]:r.GREATER,[ud]:r.NOTEQUAL};function lt(D,A){if(A.type===qn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Pn||A.magFilter===Po||A.magFilter===ws||A.magFilter===bi||A.minFilter===Pn||A.minFilter===Po||A.minFilter===ws||A.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Me[A.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Me[A.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Me[A.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Ie[A.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Ie[A.minFilter]),A.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xn||A.minFilter!==ws&&A.minFilter!==bi||A.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Pt(D,A){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",k));const le=A.source;let Z=_.get(le);Z===void 0&&(Z={},_.set(le,Z));const re=de(A);if(re!==D.__cacheKey){Z[re]===void 0&&(Z[re]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,$=!0),Z[re].usedTimes++;const ke=Z[D.__cacheKey];ke!==void 0&&(Z[D.__cacheKey].usedTimes--,ke.usedTimes===0&&C(A)),D.__cacheKey=re,D.__webglTexture=Z[re].texture}return $}function ce(D,A,$){let le=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=r.TEXTURE_3D);const Z=Pt(D,A),re=A.source;t.bindTexture(le,D.__webglTexture,r.TEXTURE0+$);const ke=n.get(re);if(re.version!==ke.__version||Z===!0){t.activeTexture(r.TEXTURE0+$);const Ae=wt.getPrimaries(wt.workingColorSpace),$e=A.colorSpace===Yi?null:wt.getPrimaries(A.colorSpace),Ze=A.colorSpace===Yi||Ae===$e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let _e=E(A.image,!1,i.maxTextureSize);_e=Ht(A,_e);const De=s.convert(A.format,A.colorSpace),ze=s.convert(A.type);let je=I(A.internalFormat,De,ze,A.colorSpace,A.isVideoTexture);lt(le,A);let Le;const Mt=A.mipmaps,nt=A.isVideoTexture!==!0,Nt=ke.__version===void 0||Z===!0,V=re.dataReady,we=W(A,_e);if(A.isDepthTexture)je=P(A.format===Us,A.type),Nt&&(nt?t.texStorage2D(r.TEXTURE_2D,1,je,_e.width,_e.height):t.texImage2D(r.TEXTURE_2D,0,je,_e.width,_e.height,0,De,ze,null));else if(A.isDataTexture)if(Mt.length>0){nt&&Nt&&t.texStorage2D(r.TEXTURE_2D,we,je,Mt[0].width,Mt[0].height);for(let ie=0,he=Mt.length;ie<he;ie++)Le=Mt[ie],nt?V&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Le.width,Le.height,De,ze,Le.data):t.texImage2D(r.TEXTURE_2D,ie,je,Le.width,Le.height,0,De,ze,Le.data);A.generateMipmaps=!1}else nt?(Nt&&t.texStorage2D(r.TEXTURE_2D,we,je,_e.width,_e.height),V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e.width,_e.height,De,ze,_e.data)):t.texImage2D(r.TEXTURE_2D,0,je,_e.width,_e.height,0,De,ze,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){nt&&Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,je,Mt[0].width,Mt[0].height,_e.depth);for(let ie=0,he=Mt.length;ie<he;ie++)if(Le=Mt[ie],A.format!==Fn)if(De!==null)if(nt){if(V)if(A.layerUpdates.size>0){const Re=xu(Le.width,Le.height,A.format,A.type);for(const Ee of A.layerUpdates){const qe=Le.data.subarray(Ee*Re/Le.data.BYTES_PER_ELEMENT,(Ee+1)*Re/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,Ee,Le.width,Le.height,1,De,qe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,_e.depth,De,Le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,je,Le.width,Le.height,_e.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,_e.depth,De,ze,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,je,Le.width,Le.height,_e.depth,0,De,ze,Le.data)}else{nt&&Nt&&t.texStorage2D(r.TEXTURE_2D,we,je,Mt[0].width,Mt[0].height);for(let ie=0,he=Mt.length;ie<he;ie++)Le=Mt[ie],A.format!==Fn?De!==null?nt?V&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,Le.width,Le.height,De,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,je,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Le.width,Le.height,De,ze,Le.data):t.texImage2D(r.TEXTURE_2D,ie,je,Le.width,Le.height,0,De,ze,Le.data)}else if(A.isDataArrayTexture)if(nt){if(Nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,je,_e.width,_e.height,_e.depth),V)if(A.layerUpdates.size>0){const ie=xu(_e.width,_e.height,A.format,A.type);for(const he of A.layerUpdates){const Re=_e.data.subarray(he*ie/_e.data.BYTES_PER_ELEMENT,(he+1)*ie/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,De,ze,Re)}A.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,De,ze,_e.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,je,_e.width,_e.height,_e.depth,0,De,ze,_e.data);else if(A.isData3DTexture)nt?(Nt&&t.texStorage3D(r.TEXTURE_3D,we,je,_e.width,_e.height,_e.depth),V&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,De,ze,_e.data)):t.texImage3D(r.TEXTURE_3D,0,je,_e.width,_e.height,_e.depth,0,De,ze,_e.data);else if(A.isFramebufferTexture){if(Nt)if(nt)t.texStorage2D(r.TEXTURE_2D,we,je,_e.width,_e.height);else{let ie=_e.width,he=_e.height;for(let Re=0;Re<we;Re++)t.texImage2D(r.TEXTURE_2D,Re,je,ie,he,0,De,ze,null),ie>>=1,he>>=1}}else if(Mt.length>0){if(nt&&Nt){const ie=Ge(Mt[0]);t.texStorage2D(r.TEXTURE_2D,we,je,ie.width,ie.height)}for(let ie=0,he=Mt.length;ie<he;ie++)Le=Mt[ie],nt?V&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,De,ze,Le):t.texImage2D(r.TEXTURE_2D,ie,je,De,ze,Le);A.generateMipmaps=!1}else if(nt){if(Nt){const ie=Ge(_e);t.texStorage2D(r.TEXTURE_2D,we,je,ie.width,ie.height)}V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,De,ze,_e)}else t.texImage2D(r.TEXTURE_2D,0,je,De,ze,_e);y(A)&&x(le),ke.__version=re.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ye(D,A,$){if(A.image.length!==6)return;const le=Pt(D,A),Z=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);const re=n.get(Z);if(Z.version!==re.__version||le===!0){t.activeTexture(r.TEXTURE0+$);const ke=wt.getPrimaries(wt.workingColorSpace),Ae=A.colorSpace===Yi?null:wt.getPrimaries(A.colorSpace),$e=A.colorSpace===Yi||ke===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const Ze=A.isCompressedTexture||A.image[0].isCompressedTexture,_e=A.image[0]&&A.image[0].isDataTexture,De=[];for(let he=0;he<6;he++)!Ze&&!_e?De[he]=E(A.image[he],!0,i.maxCubemapSize):De[he]=_e?A.image[he].image:A.image[he],De[he]=Ht(A,De[he]);const ze=De[0],je=s.convert(A.format,A.colorSpace),Le=s.convert(A.type),Mt=I(A.internalFormat,je,Le,A.colorSpace),nt=A.isVideoTexture!==!0,Nt=re.__version===void 0||le===!0,V=Z.dataReady;let we=W(A,ze);lt(r.TEXTURE_CUBE_MAP,A);let ie;if(Ze){nt&&Nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,we,Mt,ze.width,ze.height);for(let he=0;he<6;he++){ie=De[he].mipmaps;for(let Re=0;Re<ie.length;Re++){const Ee=ie[Re];A.format!==Fn?je!==null?nt?V&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,Ee.width,Ee.height,je,Ee.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,Mt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,Ee.width,Ee.height,je,Le,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,Mt,Ee.width,Ee.height,0,je,Le,Ee.data)}}}else{if(ie=A.mipmaps,nt&&Nt){ie.length>0&&we++;const he=Ge(De[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,we,Mt,he.width,he.height)}for(let he=0;he<6;he++)if(_e){nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De[he].width,De[he].height,je,Le,De[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Mt,De[he].width,De[he].height,0,je,Le,De[he].data);for(let Re=0;Re<ie.length;Re++){const qe=ie[Re].image[he].image;nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,qe.width,qe.height,je,Le,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,Mt,qe.width,qe.height,0,je,Le,qe.data)}}else{nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,je,Le,De[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Mt,je,Le,De[he]);for(let Re=0;Re<ie.length;Re++){const Ee=ie[Re];nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,je,Le,Ee.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,Mt,je,Le,Ee.image[he])}}}y(A)&&x(r.TEXTURE_CUBE_MAP),re.__version=Z.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Fe(D,A,$,le,Z,re){const ke=s.convert($.format,$.colorSpace),Ae=s.convert($.type),$e=I($.internalFormat,ke,Ae,$.colorSpace),Ze=n.get(A),_e=n.get($);if(_e.__renderTarget=A,!Ze.__hasExternalTextures){const De=Math.max(1,A.width>>re),ze=Math.max(1,A.height>>re);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,re,$e,De,ze,A.depth,0,ke,Ae,null):t.texImage2D(Z,re,$e,De,ze,0,ke,Ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),ft(A)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,Z,_e.__webglTexture,0,mt(A)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,Z,_e.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function be(D,A,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),A.depthBuffer){const le=A.depthTexture,Z=le&&le.isDepthTexture?le.type:null,re=P(A.stencilBuffer,Z),ke=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=mt(A);ft(A)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,re,A.width,A.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,re,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,re,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ke,r.RENDERBUFFER,D)}else{const le=A.textures;for(let Z=0;Z<le.length;Z++){const re=le[Z],ke=s.convert(re.format,re.colorSpace),Ae=s.convert(re.type),$e=I(re.internalFormat,ke,Ae,re.colorSpace),Ze=mt(A);$&&ft(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,$e,A.width,A.height):ft(A)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,$e,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,$e,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ke(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(A.depthTexture);le.__renderTarget=A,(!le.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),me(A.depthTexture,0);const Z=le.__webglTexture,re=mt(A);if(A.depthTexture.format===Ns)ft(A)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(A.depthTexture.format===Us)ft(A)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Et(D){const A=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),le){const Z=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,le.removeEventListener("dispose",Z)};le.addEventListener("dispose",Z),A.__depthDisposeCallback=Z}A.__boundDepthTexture=le}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const le=D.texture.mipmaps;le&&le.length>0?Ke(A.__webglFramebuffer[0],D):Ke(A.__webglFramebuffer,D)}else if($){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]===void 0)A.__webglDepthbuffer[le]=r.createRenderbuffer(),be(A.__webglDepthbuffer[le],D,!1);else{const Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=A.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,re)}}else{const le=D.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),be(A.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,re)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(D,A,$){const le=n.get(D);A!==void 0&&Fe(le.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&Et(D)}function Xt(D){const A=D.texture,$=n.get(D),le=n.get(A);D.addEventListener("dispose",f);const Z=D.textures,re=D.isWebGLCubeRenderTarget===!0,ke=Z.length>1;if(ke||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=A.version,a.memory.textures++),re){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let $e=0;$e<A.mipmaps.length;$e++)$.__webglFramebuffer[Ae][$e]=r.createFramebuffer()}else $.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(ke)for(let Ae=0,$e=Z.length;Ae<$e;Ae++){const Ze=n.get(Z[Ae]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),a.memory.textures++)}if(D.samples>0&&ft(D)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<Z.length;Ae++){const $e=Z[Ae];$.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const Ze=s.convert($e.format,$e.colorSpace),_e=s.convert($e.type),De=I($e.internalFormat,Ze,_e,$e.colorSpace,D.isXRRenderTarget===!0),ze=mt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,De,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),be($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),lt(r.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let $e=0;$e<A.mipmaps.length;$e++)Fe($.__webglFramebuffer[Ae][$e],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e);else Fe($.__webglFramebuffer[Ae],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(A)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Ae=0,$e=Z.length;Ae<$e;Ae++){const Ze=Z[Ae],_e=n.get(Ze);t.bindTexture(r.TEXTURE_2D,_e.__webglTexture),lt(r.TEXTURE_2D,Ze),Fe($.__webglFramebuffer,D,Ze,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,0),y(Ze)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,le.__webglTexture),lt(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let $e=0;$e<A.mipmaps.length;$e++)Fe($.__webglFramebuffer[$e],D,A,r.COLOR_ATTACHMENT0,Ae,$e);else Fe($.__webglFramebuffer,D,A,r.COLOR_ATTACHMENT0,Ae,0);y(A)&&x(Ae),t.unbindTexture()}D.depthBuffer&&Et(D)}function It(D){const A=D.textures;for(let $=0,le=A.length;$<le;$++){const Z=A[$];if(y(Z)){const re=U(D),ke=n.get(Z).__webglTexture;t.bindTexture(re,ke),x(re),t.unbindTexture()}}}const ht=[],F=[];function Mn(D){if(D.samples>0){if(ft(D)===!1){const A=D.textures,$=D.width,le=D.height;let Z=r.COLOR_BUFFER_BIT;const re=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ke=n.get(D),Ae=A.length>1;if(Ae)for(let Ze=0;Ze<A.length;Ze++)t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const $e=D.texture.mipmaps;$e&&$e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ze=0;Ze<A.length;Ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Ze]);const _e=n.get(A[Ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,$,le,0,0,$,le,Z,r.NEAREST),u===!0&&(ht.length=0,F.length=0,ht.push(r.COLOR_ATTACHMENT0+Ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ht.push(re),F.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let Ze=0;Ze<A.length;Ze++){t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,ke.__webglColorRenderbuffer[Ze]);const _e=n.get(A[Ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,_e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&u){const A=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function mt(D){return Math.min(i.maxSamples,D.samples)}function ft(D){const A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Oe(D){const A=a.render.frame;p.get(D)!==A&&(p.set(D,A),D.update())}function Ht(D,A){const $=D.colorSpace,le=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==yn&&$!==Yi&&(wt.getTransfer($)===Bt?(le!==Fn||Z!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function Ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=ue,this.setTexture2D=me,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=se,this.rebindTextures=He,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=ft}function Av(r,e){function t(n,i=Yi){let s;const a=wt.getTransfer(i);if(n===oi)return r.UNSIGNED_BYTE;if(n===Gl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lh)return r.BYTE;if(n===ch)return r.SHORT;if(n===Ds)return r.UNSIGNED_SHORT;if(n===Vl)return r.INT;if(n===_r)return r.UNSIGNED_INT;if(n===qn)return r.FLOAT;if(n===ks)return r.HALF_FLOAT;if(n===hh)return r.ALPHA;if(n===fh)return r.RGB;if(n===Fn)return r.RGBA;if(n===Ns)return r.DEPTH_COMPONENT;if(n===Us)return r.DEPTH_STENCIL;if(n===Xl)return r.RED;if(n===ql)return r.RED_INTEGER;if(n===dh)return r.RG;if(n===jl)return r.RG_INTEGER;if(n===Yl)return r.RGBA_INTEGER;if(n===Lo||n===Do||n===Io||n===No)if(a===Bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===ll||n===cl||n===ul)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===fl||n===dl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hl||n===fl)return a===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===Tl||n===El||n===bl||n===Al||n===wl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return a===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===Rl||n===Cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Uo)return a===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ph||n===Pl||n===Ll||n===Dl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Uo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new an,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qi({vertexShader:wv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pv extends vr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,l="local-floor",u=1,h=null,p=null,m=null,_=null,v=null,T=null;const E=new Cv,y=t.getContextAttributes();let x=null,U=null;const I=[],P=[],W=new rt;let k=null;const f=new gn;f.viewport=new Dt;const j=new gn;j.viewport=new Dt;const C=[f,j],R=new Bp;let H=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ye=I[ce];return ye===void 0&&(ye=new Ra,I[ce]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ce){let ye=I[ce];return ye===void 0&&(ye=new Ra,I[ce]=ye),ye.getGripSpace()},this.getHand=function(ce){let ye=I[ce];return ye===void 0&&(ye=new Ra,I[ce]=ye),ye.getHandSpace()};function Y(ce){const ye=P.indexOf(ce.inputSource);if(ye===-1)return;const Fe=I[ye];Fe!==void 0&&(Fe.update(ce.inputSource,ce.frame,h||a),Fe.dispatchEvent({type:ce.type,data:ce.inputSource}))}function de(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",de),i.removeEventListener("inputsourceschange",me);for(let ce=0;ce<I.length;ce++){const ye=P[ce];ye!==null&&(P[ce]=null,I[ce].disconnect(ye))}H=null,ue=null,E.reset(),e.setRenderTarget(x),v=null,_=null,m=null,i=null,U=null,Pt.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){l=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return m},this.getFrame=function(){return T},this.getSession=function(){return i},this.setSession=async function(ce){if(i=ce,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",de),i.addEventListener("inputsourceschange",me),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,be=null,Ke=null;y.depth&&(Ke=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=y.stencil?Us:Ns,be=y.stencil?Is:_r);const Et={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:s};m=new XRWebGLBinding(i,t),_=m.createProjectionLayer(Et),i.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),U=new xr(_.textureWidth,_.textureHeight,{format:Fn,type:oi,depthTexture:new Dh(_.textureWidth,_.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(i,t,Fe),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),U=new xr(v.framebufferWidth,v.framebufferHeight,{format:Fn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await i.requestReferenceSpace(l),Pt.setContext(i),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function me(ce){for(let ye=0;ye<ce.removed.length;ye++){const Fe=ce.removed[ye],be=P.indexOf(Fe);be>=0&&(P[be]=null,I[be].disconnect(Fe))}for(let ye=0;ye<ce.added.length;ye++){const Fe=ce.added[ye];let be=P.indexOf(Fe);if(be===-1){for(let Et=0;Et<I.length;Et++)if(Et>=P.length){P.push(Fe),be=Et;break}else if(P[Et]===null){P[Et]=Fe,be=Et;break}if(be===-1)break}const Ke=I[be];Ke&&Ke.connect(Fe)}}const fe=new G,pe=new G;function se(ce,ye,Fe){fe.setFromMatrixPosition(ye.matrixWorld),pe.setFromMatrixPosition(Fe.matrixWorld);const be=fe.distanceTo(pe),Ke=ye.projectionMatrix.elements,Et=Fe.projectionMatrix.elements,He=Ke[14]/(Ke[10]-1),Xt=Ke[14]/(Ke[10]+1),It=(Ke[9]+1)/Ke[5],ht=(Ke[9]-1)/Ke[5],F=(Ke[8]-1)/Ke[0],Mn=(Et[8]+1)/Et[0],mt=He*F,ft=He*Mn,Oe=be/(-F+Mn),Ht=Oe*-F;if(ye.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Ht),ce.translateZ(Oe),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Ke[10]===-1)ce.projectionMatrix.copy(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const Ge=He+Oe,D=Xt+Oe,A=mt-Ht,$=ft+(be-Ht),le=It*Xt/D*Ge,Z=ht*Xt/D*Ge;ce.projectionMatrix.makePerspective(A,$,le,Z,Ge,D),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Me(ce,ye){ye===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ye.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(i===null)return;let ye=ce.near,Fe=ce.far;E.texture!==null&&(E.depthNear>0&&(ye=E.depthNear),E.depthFar>0&&(Fe=E.depthFar)),R.near=j.near=f.near=ye,R.far=j.far=f.far=Fe,(H!==R.near||ue!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,ue=R.far),f.layers.mask=ce.layers.mask|2,j.layers.mask=ce.layers.mask|4,R.layers.mask=f.layers.mask|j.layers.mask;const be=ce.parent,Ke=R.cameras;Me(R,be);for(let Et=0;Et<Ke.length;Et++)Me(Ke[Et],be);Ke.length===2?se(R,f,j):R.projectionMatrix.copy(f.projectionMatrix),Ie(ce,R,be)};function Ie(ce,ye,Fe){Fe===null?ce.matrix.copy(ye.matrixWorld):(ce.matrix.copy(Fe.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ye.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Jr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&v===null))return u},this.setFoveation=function(ce){u=ce,_!==null&&(_.fixedFoveation=ce),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ce)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let Ve=null;function lt(ce,ye){if(p=ye.getViewerPose(h||a),T=ye,p!==null){const Fe=p.views;v!==null&&(e.setRenderTargetFramebuffer(U,v.framebuffer),e.setRenderTarget(U));let be=!1;Fe.length!==R.cameras.length&&(R.cameras.length=0,be=!0);for(let He=0;He<Fe.length;He++){const Xt=Fe[He];let It=null;if(v!==null)It=v.getViewport(Xt);else{const F=m.getViewSubImage(_,Xt);It=F.viewport,He===0&&(e.setRenderTargetTextures(U,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(U))}let ht=C[He];ht===void 0&&(ht=new gn,ht.layers.enable(He),ht.viewport=new Dt,C[He]=ht),ht.matrix.fromArray(Xt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Xt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(It.x,It.y,It.width,It.height),He===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),be===!0&&R.cameras.push(ht)}const Ke=i.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){const He=m.getDepthInformation(Fe[0]);He&&He.isValid&&He.texture&&E.init(e,He,i.renderState)}}for(let Fe=0;Fe<I.length;Fe++){const be=P[Fe],Ke=I[Fe];be!==null&&Ke!==void 0&&Ke.update(be,ye,h||a)}Ve&&Ve(ce,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),T=null}const Pt=new Bh;Pt.setAnimationLoop(lt),this.setAnimationLoop=function(ce){Ve=ce},this.dispose=function(){}}}const hr=new ai,Lv=new at;function Dv(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,bh(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function i(y,x,U,I,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?s(y,x):x.isMeshToonMaterial?(s(y,x),m(y,x)):x.isMeshPhongMaterial?(s(y,x),p(y,x)):x.isMeshStandardMaterial?(s(y,x),_(y,x),x.isMeshPhysicalMaterial&&v(y,x,P)):x.isMeshMatcapMaterial?(s(y,x),T(y,x)):x.isMeshDepthMaterial?s(y,x):x.isMeshDistanceMaterial?(s(y,x),E(y,x)):x.isMeshNormalMaterial?s(y,x):x.isLineBasicMaterial?(a(y,x),x.isLineDashedMaterial&&l(y,x)):x.isPointsMaterial?u(y,x,U,I):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===wn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===wn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=e.get(x),I=U.envMap,P=U.envMapRotation;I&&(y.envMap.value=I,hr.copy(P),hr.x*=-1,hr.y*=-1,hr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),y.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(hr)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function a(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function l(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function u(y,x,U,I){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=I*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function m(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function v(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===wn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const U=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(r,e,t,n){let i={},s={},a=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(U,I){const P=I.program;n.uniformBlockBinding(U,P)}function h(U,I){let P=i[U.id];P===void 0&&(T(U),P=p(U),i[U.id]=P,U.addEventListener("dispose",y));const W=I.program;n.updateUBOMapping(U,W);const k=e.render.frame;s[U.id]!==k&&(_(U),s[U.id]=k)}function p(U){const I=m();U.__bindingPointIndex=I;const P=r.createBuffer(),W=U.__size,k=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,W,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,P),P}function m(){for(let U=0;U<l;U++)if(a.indexOf(U)===-1)return a.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const I=i[U.id],P=U.uniforms,W=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let k=0,f=P.length;k<f;k++){const j=Array.isArray(P[k])?P[k]:[P[k]];for(let C=0,R=j.length;C<R;C++){const H=j[C];if(v(H,k,C,W)===!0){const ue=H.__offset,Y=Array.isArray(H.value)?H.value:[H.value];let de=0;for(let me=0;me<Y.length;me++){const fe=Y[me],pe=E(fe);typeof fe=="number"||typeof fe=="boolean"?(H.__data[0]=fe,r.bufferSubData(r.UNIFORM_BUFFER,ue+de,H.__data)):fe.isMatrix3?(H.__data[0]=fe.elements[0],H.__data[1]=fe.elements[1],H.__data[2]=fe.elements[2],H.__data[3]=0,H.__data[4]=fe.elements[3],H.__data[5]=fe.elements[4],H.__data[6]=fe.elements[5],H.__data[7]=0,H.__data[8]=fe.elements[6],H.__data[9]=fe.elements[7],H.__data[10]=fe.elements[8],H.__data[11]=0):(fe.toArray(H.__data,de),de+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ue,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(U,I,P,W){const k=U.value,f=I+"_"+P;if(W[f]===void 0)return typeof k=="number"||typeof k=="boolean"?W[f]=k:W[f]=k.clone(),!0;{const j=W[f];if(typeof k=="number"||typeof k=="boolean"){if(j!==k)return W[f]=k,!0}else if(j.equals(k)===!1)return j.copy(k),!0}return!1}function T(U){const I=U.uniforms;let P=0;const W=16;for(let f=0,j=I.length;f<j;f++){const C=Array.isArray(I[f])?I[f]:[I[f]];for(let R=0,H=C.length;R<H;R++){const ue=C[R],Y=Array.isArray(ue.value)?ue.value:[ue.value];for(let de=0,me=Y.length;de<me;de++){const fe=Y[de],pe=E(fe),se=P%W,Me=se%pe.boundary,Ie=se+Me;P+=Me,Ie!==0&&W-Ie<pe.storage&&(P+=W-Ie),ue.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=P,P+=pe.storage}}}const k=P%W;return k>0&&(P+=W-k),U.__size=P,U.__cache={},this}function E(U){const I={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(I.boundary=4,I.storage=4):U.isVector2?(I.boundary=8,I.storage=8):U.isVector3||U.isColor?(I.boundary=16,I.storage=12):U.isVector4?(I.boundary=16,I.storage=16):U.isMatrix3?(I.boundary=48,I.storage=48):U.isMatrix4?(I.boundary=64,I.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),I}function y(U){const I=U.target;I.removeEventListener("dispose",y);const P=a.indexOf(I.__bindingPointIndex);a.splice(P,1),r.deleteBuffer(i[I.id]),delete i[I.id],delete s[I.id]}function x(){for(const U in i)r.deleteBuffer(i[U]);a=[],i={},s={}}return{bind:u,update:h,dispose:x}}class Nv{constructor(e={}){const{canvas:t=Cd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const T=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const U=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let W=!1;this._outputColorSpace=on;let k=0,f=0,j=null,C=-1,R=null;const H=new Dt,ue=new Dt;let Y=null;const de=new st(0);let me=0,fe=t.width,pe=t.height,se=1,Me=null,Ie=null;const Ve=new Dt(0,0,fe,pe),lt=new Dt(0,0,fe,pe);let Pt=!1;const ce=new Ql;let ye=!1,Fe=!1;const be=new at,Ke=new at,Et=new G,He=new Dt,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function ht(){return j===null?se:1}let F=n;function Mn(w,X){return t.getContext(w,X)}try{const w={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zl}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),F===null){const X="webgl2";if(F=Mn(X,w),F===null)throw Mn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let mt,ft,Oe,Ht,Ge,D,A,$,le,Z,re,ke,Ae,$e,Ze,_e,De,ze,je,Le,Mt,nt,Nt,V;function we(){mt=new W_(F),mt.init(),nt=new Av(F,mt),ft=new F_(F,mt,e,nt),Oe=new Ev(F,mt),ft.reverseDepthBuffer&&_&&Oe.buffers.depth.setReversed(!0),Ht=new j_(F),Ge=new hv,D=new bv(F,mt,Oe,Ge,ft,nt,Ht),A=new k_(P),$=new G_(P),le=new Qp(F),Nt=new U_(F,le),Z=new X_(F,le,Ht,Nt),re=new K_(F,Z,le,Ht),je=new Y_(F,ft,D),_e=new B_(Ge),ke=new uv(P,A,$,mt,ft,Nt,_e),Ae=new Dv(P,Ge),$e=new dv,Ze=new vv(mt),ze=new N_(P,A,$,Oe,re,v,u),De=new Sv(P,re,ft),V=new Iv(F,Ht,ft,Oe),Le=new O_(F,mt,Ht),Mt=new q_(F,mt,Ht),Ht.programs=ke.programs,P.capabilities=ft,P.extensions=mt,P.properties=Ge,P.renderLists=$e,P.shadowMap=De,P.state=Oe,P.info=Ht}we();const ie=new Pv(P,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(w){w!==void 0&&(se=w,this.setSize(fe,pe,!1))},this.getSize=function(w){return w.set(fe,pe)},this.setSize=function(w,X,Q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=w,pe=X,t.width=Math.floor(w*se),t.height=Math.floor(X*se),Q===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(fe*se,pe*se).floor()},this.setDrawingBufferSize=function(w,X,Q){fe=w,pe=X,se=Q,t.width=Math.floor(w*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(Ve)},this.setViewport=function(w,X,Q,ee){w.isVector4?Ve.set(w.x,w.y,w.z,w.w):Ve.set(w,X,Q,ee),Oe.viewport(H.copy(Ve).multiplyScalar(se).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,X,Q,ee){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,X,Q,ee),Oe.scissor(ue.copy(lt).multiplyScalar(se).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(w){Oe.setScissorTest(Pt=w)},this.setOpaqueSort=function(w){Me=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,Q=!0){let ee=0;if(w){let q=!1;if(j!==null){const xe=j.texture.format;q=xe===Yl||xe===jl||xe===ql}if(q){const xe=j.texture.type,Se=xe===oi||xe===_r||xe===Ds||xe===Is||xe===Gl||xe===Wl,Ne=ze.getClearColor(),Ue=ze.getClearAlpha(),et=Ne.r,Je=Ne.g,Xe=Ne.b;Se?(T[0]=et,T[1]=Je,T[2]=Xe,T[3]=Ue,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=et,E[1]=Je,E[2]=Xe,E[3]=Ue,F.clearBufferiv(F.COLOR,0,E))}else ee|=F.COLOR_BUFFER_BIT}X&&(ee|=F.DEPTH_BUFFER_BIT),Q&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),ze.dispose(),$e.dispose(),Ze.dispose(),Ge.dispose(),A.dispose(),$.dispose(),re.dispose(),Nt.dispose(),V.dispose(),ke.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",hi),ie.removeEventListener("sessionend",fi),Bn.stop()};function he(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const w=Ht.autoReset,X=De.enabled,Q=De.autoUpdate,ee=De.needsUpdate,q=De.type;we(),Ht.autoReset=w,De.enabled=X,De.autoUpdate=Q,De.needsUpdate=ee,De.type=q}function Ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qe(w){const X=w.target;X.removeEventListener("dispose",qe),gt(X)}function gt(w){Yt(w),Ge.remove(w)}function Yt(w){const X=Ge.get(w).programs;X!==void 0&&(X.forEach(function(Q){ke.releaseProgram(Q)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,Q,ee,q,xe){X===null&&(X=Xt);const Se=q.isMesh&&q.matrixWorld.determinant()<0,Ne=jo(w,X,Q,ee,q);Oe.setMaterial(ee,Se);let Ue=Q.index,et=1;if(ee.wireframe===!0){if(Ue=Z.getWireframeAttribute(Q),Ue===void 0)return;et=2}const Je=Q.drawRange,Xe=Q.attributes.position;let St=Je.start*et,bt=(Je.start+Je.count)*et;xe!==null&&(St=Math.max(St,xe.start*et),bt=Math.min(bt,(xe.start+xe.count)*et)),Ue!==null?(St=Math.max(St,0),bt=Math.min(bt,Ue.count)):Xe!=null&&(St=Math.max(St,0),bt=Math.min(bt,Xe.count));const qt=bt-St;if(qt<0||qt===1/0)return;Nt.setup(q,ee,Ne,Q,Ue);let _t,dt=Le;if(Ue!==null&&(_t=le.get(Ue),dt=Mt,dt.setIndex(_t)),q.isMesh)ee.wireframe===!0?(Oe.setLineWidth(ee.wireframeLinewidth*ht()),dt.setMode(F.LINES)):dt.setMode(F.TRIANGLES);else if(q.isLine){let We=ee.linewidth;We===void 0&&(We=1),Oe.setLineWidth(We*ht()),q.isLineSegments?dt.setMode(F.LINES):q.isLineLoop?dt.setMode(F.LINE_LOOP):dt.setMode(F.LINE_STRIP)}else q.isPoints?dt.setMode(F.POINTS):q.isSprite&&dt.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Oo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const We=q._multiDrawStarts,Zt=q._multiDrawCounts,Ct=q._multiDrawCount,fn=Ue?le.get(Ue).bytesPerElement:1,di=Ge.get(ee).currentProgram.getUniforms();for(let nn=0;nn<Ct;nn++)di.setValue(F,"_gl_DrawID",nn),dt.render(We[nn]/fn,Zt[nn])}else if(q.isInstancedMesh)dt.renderInstances(St,qt,q.count);else if(Q.isInstancedBufferGeometry){const We=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Zt=Math.min(Q.instanceCount,We);dt.renderInstances(St,qt,Zt)}else dt.render(St,qt)};function Lt(w,X,Q){w.transparent===!0&&w.side===Gn&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,Sr(w,X,Q),w.side=Pi,w.needsUpdate=!0,Sr(w,X,Q),w.side=Gn):Sr(w,X,Q)}this.compile=function(w,X,Q=null){Q===null&&(Q=w),x=Ze.get(Q),x.init(X),I.push(x),Q.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),w!==Q&&w.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const ee=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const xe=q.material;if(xe)if(Array.isArray(xe))for(let Se=0;Se<xe.length;Se++){const Ne=xe[Se];Lt(Ne,Q,q),ee.add(Ne)}else Lt(xe,Q,q),ee.add(xe)}),x=I.pop(),ee},this.compileAsync=function(w,X,Q=null){const ee=this.compile(w,X,Q);return new Promise(q=>{function xe(){if(ee.forEach(function(Se){Ge.get(Se).currentProgram.isReady()&&ee.delete(Se)}),ee.size===0){q(w);return}setTimeout(xe,10)}mt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Sn=null;function Ln(w){Sn&&Sn(w)}function hi(){Bn.stop()}function fi(){Bn.start()}const Bn=new Bh;Bn.setAnimationLoop(Ln),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(w){Sn=w,ie.setAnimationLoop(w),w===null?Bn.stop():Bn.start()},ie.addEventListener("sessionstart",hi),ie.addEventListener("sessionend",fi),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,X,j),x=Ze.get(w,I.length),x.init(X),I.push(x),Ke.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ce.setFromProjectionMatrix(Ke),Fe=this.localClippingEnabled,ye=_e.init(this.clippingPlanes,Fe),y=$e.get(w,U.length),y.init(),U.push(y),ie.enabled===!0&&ie.isPresenting===!0){const xe=P.xr.getDepthSensingMesh();xe!==null&&Ii(xe,X,-1/0,P.sortObjects)}Ii(w,X,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(Me,Ie),It=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,It&&ze.addToRenderList(y,w),this.info.render.frame++,ye===!0&&_e.beginShadows();const Q=x.state.shadowsArray;De.render(Q,w,X),ye===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=y.opaque,q=y.transmissive;if(x.setupLights(),X.isArrayCamera){const xe=X.cameras;if(q.length>0)for(let Se=0,Ne=xe.length;Se<Ne;Se++){const Ue=xe[Se];Xs(ee,q,w,Ue)}It&&ze.render(w);for(let Se=0,Ne=xe.length;Se<Ne;Se++){const Ue=xe[Se];Ws(y,w,Ue,Ue.viewport)}}else q.length>0&&Xs(ee,q,w,X),It&&ze.render(w),Ws(y,w,X);j!==null&&f===0&&(D.updateMultisampleRenderTarget(j),D.updateRenderTargetMipmap(j)),w.isScene===!0&&w.onAfterRender(P,w,X),Nt.resetDefaultState(),C=-1,R=null,I.pop(),I.length>0?(x=I[I.length-1],ye===!0&&_e.setGlobalState(P.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ii(w,X,Q,ee){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ce.intersectsSprite(w)){ee&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ke);const Se=re.update(w),Ne=w.material;Ne.visible&&y.push(w,Se,Ne,Q,He.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ce.intersectsObject(w))){const Se=re.update(w),Ne=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),He.copy(Se.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(Ke)),Array.isArray(Ne)){const Ue=Se.groups;for(let et=0,Je=Ue.length;et<Je;et++){const Xe=Ue[et],St=Ne[Xe.materialIndex];St&&St.visible&&y.push(w,Se,St,Q,He.z,Xe)}}else Ne.visible&&y.push(w,Se,Ne,Q,He.z,null)}}const xe=w.children;for(let Se=0,Ne=xe.length;Se<Ne;Se++)Ii(xe[Se],X,Q,ee)}function Ws(w,X,Q,ee){const q=w.opaque,xe=w.transmissive,Se=w.transparent;x.setupLightsView(Q),ye===!0&&_e.setGlobalState(P.clippingPlanes,Q),ee&&Oe.viewport(H.copy(ee)),q.length>0&&Mr(q,X,Q),xe.length>0&&Mr(xe,X,Q),Se.length>0&&Mr(Se,X,Q),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Xs(w,X,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new xr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?ks:oi,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const xe=x.state.transmissionRenderTarget[ee.id],Se=ee.viewport||H;xe.setSize(Se.z*P.transmissionResolutionScale,Se.w*P.transmissionResolutionScale);const Ne=P.getRenderTarget();P.setRenderTarget(xe),P.getClearColor(de),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),It&&ze.render(Q);const Ue=P.toneMapping;P.toneMapping=Ji;const et=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),ye===!0&&_e.setGlobalState(P.clippingPlanes,ee),Mr(w,Q,ee),D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Xe=0,St=X.length;Xe<St;Xe++){const bt=X[Xe],qt=bt.object,_t=bt.geometry,dt=bt.material,We=bt.group;if(dt.side===Gn&&qt.layers.test(ee.layers)){const Zt=dt.side;dt.side=wn,dt.needsUpdate=!0,ls(qt,Q,ee,_t,dt,We),dt.side=Zt,dt.needsUpdate=!0,Je=!0}}Je===!0&&(D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe))}P.setRenderTarget(Ne),P.setClearColor(de,me),et!==void 0&&(ee.viewport=et),P.toneMapping=Ue}function Mr(w,X,Q){const ee=X.isScene===!0?X.overrideMaterial:null;for(let q=0,xe=w.length;q<xe;q++){const Se=w[q],Ne=Se.object,Ue=Se.geometry,et=Se.group;let Je=Se.material;Je.allowOverride===!0&&ee!==null&&(Je=ee),Ne.layers.test(Q.layers)&&ls(Ne,X,Q,Ue,Je,et)}}function ls(w,X,Q,ee,q,xe){w.onBeforeRender(P,X,Q,ee,q,xe),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(P,X,Q,ee,w,xe),q.transparent===!0&&q.side===Gn&&q.forceSinglePass===!1?(q.side=wn,q.needsUpdate=!0,P.renderBufferDirect(Q,X,ee,q,w,xe),q.side=Pi,q.needsUpdate=!0,P.renderBufferDirect(Q,X,ee,q,w,xe),q.side=Gn):P.renderBufferDirect(Q,X,ee,q,w,xe),w.onAfterRender(P,X,Q,ee,q,xe)}function Sr(w,X,Q){X.isScene!==!0&&(X=Xt);const ee=Ge.get(w),q=x.state.lights,xe=x.state.shadowsArray,Se=q.state.version,Ne=ke.getParameters(w,q.state,xe,X,Q),Ue=ke.getProgramCacheKey(Ne);let et=ee.programs;ee.environment=w.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(w.isMeshStandardMaterial?$:A).get(w.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",qe),et=new Map,ee.programs=et);let Je=et.get(Ue);if(Je!==void 0){if(ee.currentProgram===Je&&ee.lightsStateVersion===Se)return cs(w,Ne),Je}else Ne.uniforms=ke.getUniforms(w),w.onBeforeCompile(Ne,P),Je=ke.acquireProgram(Ne,Ue),et.set(Ue,Je),ee.uniforms=Ne.uniforms;const Xe=ee.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=_e.uniform),cs(w,Ne),ee.needsLights=js(w),ee.lightsStateVersion=Se,ee.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),ee.currentProgram=Je,ee.uniformsList=null,Je}function qs(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Fo.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function cs(w,X){const Q=Ge.get(w);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.batchingColor=X.batchingColor,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.instancingMorph=X.instancingMorph,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function jo(w,X,Q,ee,q){X.isScene!==!0&&(X=Xt),D.resetTextureUnits();const xe=X.fog,Se=ee.isMeshStandardMaterial?X.environment:null,Ne=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:yn,Ue=(ee.isMeshStandardMaterial?$:A).get(ee.envMap||Se),et=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Je=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!Q.morphAttributes.position,St=!!Q.morphAttributes.normal,bt=!!Q.morphAttributes.color;let qt=Ji;ee.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(qt=P.toneMapping);const _t=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,dt=_t!==void 0?_t.length:0,We=Ge.get(ee),Zt=x.state.lights;if(ye===!0&&(Fe===!0||w!==R)){const rn=w===R&&ee.id===C;_e.setState(ee,w,rn)}let Ct=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Zt.state.version||We.outputColorSpace!==Ne||q.isBatchedMesh&&We.batching===!1||!q.isBatchedMesh&&We.batching===!0||q.isBatchedMesh&&We.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&We.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&We.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&We.instancingMorph===!1&&q.morphTexture!==null||We.envMap!==Ue||ee.fog===!0&&We.fog!==xe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==_e.numPlanes||We.numIntersection!==_e.numIntersection)||We.vertexAlphas!==et||We.vertexTangents!==Je||We.morphTargets!==Xe||We.morphNormals!==St||We.morphColors!==bt||We.toneMapping!==qt||We.morphTargetsCount!==dt)&&(Ct=!0):(Ct=!0,We.__version=ee.version);let fn=We.currentProgram;Ct===!0&&(fn=Sr(ee,X,q));let di=!1,nn=!1,Ui=!1;const zt=fn.getUniforms(),Tn=We.uniforms;if(Oe.useProgram(fn.program)&&(di=!0,nn=!0,Ui=!0),ee.id!==C&&(C=ee.id,nn=!0),di||R!==w){Oe.buffers.depth.getReversed()?(be.copy(w.projectionMatrix),Ld(be),Dd(be),zt.setValue(F,"projectionMatrix",be)):zt.setValue(F,"projectionMatrix",w.projectionMatrix),zt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Kt=zt.map.cameraPosition;Kt!==void 0&&Kt.setValue(F,Et.setFromMatrixPosition(w.matrixWorld)),ft.logarithmicDepthBuffer&&zt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&zt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,nn=!0,Ui=!0)}if(q.isSkinnedMesh){zt.setOptional(F,q,"bindMatrix"),zt.setOptional(F,q,"bindMatrixInverse");const rn=q.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),zt.setValue(F,"boneTexture",rn.boneTexture,D))}q.isBatchedMesh&&(zt.setOptional(F,q,"batchingTexture"),zt.setValue(F,"batchingTexture",q._matricesTexture,D),zt.setOptional(F,q,"batchingIdTexture"),zt.setValue(F,"batchingIdTexture",q._indirectTexture,D),zt.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&zt.setValue(F,"batchingColorTexture",q._colorsTexture,D));const Wt=Q.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&je.update(q,Q,fn),(nn||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,zt.setValue(F,"receiveShadow",q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Tn.envMap.value=Ue,Tn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(Tn.envMapIntensity.value=X.environmentIntensity),nn&&(zt.setValue(F,"toneMappingExposure",P.toneMappingExposure),We.needsLights&&Ni(Tn,Ui),xe&&ee.fog===!0&&Ae.refreshFogUniforms(Tn,xe),Ae.refreshMaterialUniforms(Tn,ee,se,pe,x.state.transmissionRenderTarget[w.id]),Fo.upload(F,qs(We),Tn,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Fo.upload(F,qs(We),Tn,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&zt.setValue(F,"center",q.center),zt.setValue(F,"modelViewMatrix",q.modelViewMatrix),zt.setValue(F,"normalMatrix",q.normalMatrix),zt.setValue(F,"modelMatrix",q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const rn=ee.uniformsGroups;for(let Kt=0,fs=rn.length;Kt<fs;Kt++){const pi=rn[Kt];V.update(pi,fn),V.bind(pi,fn)}}return fn}function Ni(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function js(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,X,Q){const ee=Ge.get(w);ee.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Ge.get(w.texture).__webglTexture=X,Ge.get(w.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const Q=Ge.get(w);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0};const us=F.createFramebuffer();this.setRenderTarget=function(w,X=0,Q=0){j=w,k=X,f=Q;let ee=!0,q=null,xe=!1,Se=!1;if(w){const Ue=Ge.get(w);if(Ue.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(F.FRAMEBUFFER,null),ee=!1;else if(Ue.__webglFramebuffer===void 0)D.setupRenderTarget(w);else if(Ue.__hasExternalTextures)D.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xe=w.depthTexture;if(Ue.__boundDepthTexture!==Xe){if(Xe!==null&&Ge.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Se=!0);const Je=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?q=Je[X][Q]:q=Je[X],xe=!0):w.samples>0&&D.useMultisampledRTT(w)===!1?q=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?q=Je[Q]:q=Je,H.copy(w.viewport),ue.copy(w.scissor),Y=w.scissorTest}else H.copy(Ve).multiplyScalar(se).floor(),ue.copy(lt).multiplyScalar(se).floor(),Y=Pt;if(Q!==0&&(q=us),Oe.bindFramebuffer(F.FRAMEBUFFER,q)&&ee&&Oe.drawBuffers(w,q),Oe.viewport(H),Oe.scissor(ue),Oe.setScissorTest(Y),xe){const Ue=Ge.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,Q)}else if(Se){const Ue=Ge.get(w.texture),et=X;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.__webglTexture,Q,et)}else if(w!==null&&Q!==0){const Ue=Ge.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ue.__webglTexture,Q)}C=-1},this.readRenderTargetPixels=function(w,X,Q,ee,q,xe,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){Oe.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const Ue=w.texture,et=Ue.format,Je=Ue.type;if(!ft.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ee&&Q>=0&&Q<=w.height-q&&F.readPixels(X,Q,ee,q,nt.convert(et),nt.convert(Je),xe)}finally{const Ue=j!==null?Ge.get(j).__webglFramebuffer:null;Oe.bindFramebuffer(F.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,X,Q,ee,q,xe,Se){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne)if(X>=0&&X<=w.width-ee&&Q>=0&&Q<=w.height-q){Oe.bindFramebuffer(F.FRAMEBUFFER,Ne);const Ue=w.texture,et=Ue.format,Je=Ue.type;if(!ft.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(X,Q,ee,q,nt.convert(et),nt.convert(Je),0);const St=j!==null?Ge.get(j).__webglFramebuffer:null;Oe.bindFramebuffer(F.FRAMEBUFFER,St);const bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Pd(F,bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(Xe),F.deleteSync(bt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,Q=0){const ee=Math.pow(2,-Q),q=Math.floor(w.image.width*ee),xe=Math.floor(w.image.height*ee),Se=X!==null?X.x:0,Ne=X!==null?X.y:0;D.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Se,Ne,q,xe),Oe.unbindTexture()};const hs=F.createFramebuffer(),Tr=F.createFramebuffer();this.copyTextureToTexture=function(w,X,Q=null,ee=null,q=0,xe=null){xe===null&&(q!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=q,q=0):xe=0);let Se,Ne,Ue,et,Je,Xe,St,bt,qt;const _t=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(Q!==null)Se=Q.max.x-Q.min.x,Ne=Q.max.y-Q.min.y,Ue=Q.isBox3?Q.max.z-Q.min.z:1,et=Q.min.x,Je=Q.min.y,Xe=Q.isBox3?Q.min.z:0;else{const Wt=Math.pow(2,-q);Se=Math.floor(_t.width*Wt),Ne=Math.floor(_t.height*Wt),w.isDataArrayTexture?Ue=_t.depth:w.isData3DTexture?Ue=Math.floor(_t.depth*Wt):Ue=1,et=0,Je=0,Xe=0}ee!==null?(St=ee.x,bt=ee.y,qt=ee.z):(St=0,bt=0,qt=0);const dt=nt.convert(X.format),We=nt.convert(X.type);let Zt;X.isData3DTexture?(D.setTexture3D(X,0),Zt=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),Zt=F.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),Zt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const Ct=F.getParameter(F.UNPACK_ROW_LENGTH),fn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),di=F.getParameter(F.UNPACK_SKIP_PIXELS),nn=F.getParameter(F.UNPACK_SKIP_ROWS),Ui=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,Je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const zt=w.isDataArrayTexture||w.isData3DTexture,Tn=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const Wt=Ge.get(w),rn=Ge.get(X),Kt=Ge.get(Wt.__renderTarget),fs=Ge.get(rn.__renderTarget);Oe.bindFramebuffer(F.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Oe.bindFramebuffer(F.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let pi=0;pi<Ue;pi++)zt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,q,Xe+pi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(X).__webglTexture,xe,qt+pi)),F.blitFramebuffer(et,Je,Se,Ne,St,bt,Se,Ne,F.DEPTH_BUFFER_BIT,F.NEAREST);Oe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||Ge.has(w)){const Wt=Ge.get(w),rn=Ge.get(X);Oe.bindFramebuffer(F.READ_FRAMEBUFFER,hs),Oe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Tr);for(let Kt=0;Kt<Ue;Kt++)zt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,q,Xe+Kt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,q),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rn.__webglTexture,xe,qt+Kt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rn.__webglTexture,xe),q!==0?F.blitFramebuffer(et,Je,Se,Ne,St,bt,Se,Ne,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(Zt,xe,St,bt,qt+Kt,et,Je,Se,Ne):F.copyTexSubImage2D(Zt,xe,St,bt,et,Je,Se,Ne);Oe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Zt,xe,St,bt,qt,Se,Ne,Ue,dt,We,_t.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Zt,xe,St,bt,qt,Se,Ne,Ue,dt,_t.data):F.texSubImage3D(Zt,xe,St,bt,qt,Se,Ne,Ue,dt,We,_t):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,St,bt,Se,Ne,dt,We,_t.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,St,bt,_t.width,_t.height,dt,_t.data):F.texSubImage2D(F.TEXTURE_2D,xe,St,bt,Se,Ne,dt,We,_t);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ct),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,di),F.pixelStorei(F.UNPACK_SKIP_ROWS,nn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ui),xe===0&&X.generateMipmaps&&F.generateMipmap(Zt),Oe.unbindTexture()},this.copyTextureToTexture3D=function(w,X,Q=null,ee=null,q=0){return Oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,Q,ee,q)},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&D.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?D.setTextureCube(w,0):w.isData3DTexture?D.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?D.setTexture2DArray(w,0):D.setTexture2D(w,0),Oe.unbindTexture()},this.resetState=function(){k=0,f=0,j=null,Oe.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const Gu={type:"change"},cc={type:"start"},Gh={type:"end"},wo=new Hs,Wu=new qi,Uv=Math.cos(70*xh.DEG2RAD),Qt=new G,bn=2*Math.PI,kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},za=1e-6;class Ov extends Zp{constructor(e,t=null){super(e,t),this.state=kt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Yn,this._lastTargetPosition=new G,this._quat=new Yn().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _u,this._sphericalDelta=new _u,this._scale=1,this._panOffset=new G,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new G,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bv.bind(this),this._onPointerDown=Fv.bind(this),this._onPointerUp=kv.bind(this),this._onContextMenu=qv.bind(this),this._onMouseWheel=Vv.bind(this),this._onKeyDown=Gv.bind(this),this._onTouchStart=Wv.bind(this),this._onTouchMove=Xv.bind(this),this._onMouseDown=Hv.bind(this),this._onMouseMove=zv.bind(this),this._interceptControlDown=jv.bind(this),this._interceptControlUp=Yv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gu),this.update(),this.state=kt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=Qt.length();a=this._clampDistance(l*this._scale);const u=l-a;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const l=new G(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new G(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),a=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(wo.origin.copy(this.object.position),wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wo.direction))<Uv?this.object.lookAt(this.target):(Wu.setFromNormalAndCoplanarPoint(this.object.up,this.target),wo.intersectPlane(Wu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>za||this._lastTargetPosition.distanceToSquared(this.target)>za?(this.dispatchEvent(Gu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Qt.copy(i).sub(this.target);let s=Qt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,l=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new rt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Fv(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Bv(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function kv(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gh),this.state=kt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hv(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=kt.DOLLY;break;case Wr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=kt.ROTATE}break;case Wr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=kt.PAN}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(cc)}function zv(r){switch(this.state){case kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Vv(r){this.enabled===!1||this.enableZoom===!1||this.state!==kt.NONE||(r.preventDefault(),this.dispatchEvent(cc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Gh))}function Gv(r){this.enabled!==!1&&this._handleKeyDown(r)}function Wv(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=kt.TOUCH_ROTATE;break;case Vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=kt.TOUCH_PAN;break;default:this.state=kt.NONE}break;case 2:switch(this.touches.TWO){case Vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=kt.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=kt.TOUCH_DOLLY_ROTATE;break;default:this.state=kt.NONE}break;default:this.state=kt.NONE}this.state!==kt.NONE&&this.dispatchEvent(cc)}function Xv(r){switch(this._trackPointer(r),this.state){case kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=kt.NONE}}function qv(r){this.enabled!==!1&&r.preventDefault()}function jv(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yv(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xu(r,e){if(e===nd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Il||e===mh){let t=r.getIndex();if(t===null){const a=[],l=r.getAttribute("position");if(l!==void 0){for(let u=0;u<l.count;u++)a.push(u);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Il)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Kv extends yr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new e0(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new h0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new c0(t)}),this.register(function(t){return new l0(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new p0(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=Ls.extractUrlBase(e);a=Ls.resolveURL(h,this.path)}else a=Ls.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},u=new nc(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{s.parse(h,a,function(p){t(p),s.manager.itemEnd(e)},l)}catch(p){l(p)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},l={},u=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===Wh){try{a[yt.KHR_BINARY_GLTF]=new m0(e)}catch(m){i&&i(m);return}s=JSON.parse(a[yt.KHR_BINARY_GLTF].content)}else s=JSON.parse(u.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new R0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](h);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[m.name]=m,a[m.name]=!0}if(s.extensionsUsed)for(let p=0;p<s.extensionsUsed.length;++p){const m=s.extensionsUsed[p],_=s.extensionsRequired||[];switch(m){case yt.KHR_MATERIALS_UNLIT:a[m]=new Jv;break;case yt.KHR_DRACO_MESH_COMPRESSION:a[m]=new g0(s,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:a[m]=new _0;break;case yt.KHR_MESH_QUANTIZATION:a[m]=new x0;break;default:_.indexOf(m)>=0&&l[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}h.setExtensions(a),h.setPlugins(l),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function $v(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zv{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const p=new st(16777215);u.color!==void 0&&p.setRGB(u.color[0],u.color[1],u.color[2],yn);const m=u.range!==void 0?u.range:0;switch(u.type){case"directional":h=new Up(p),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Ip(p),h.distance=m;break;case"spot":h=new Lp(p),h.distance=m,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,h.angle=u.spot.outerConeAngle,h.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return h.position.set(0,0,0),Ei(h,u),u.intensity!==void 0&&(h.intensity=u.intensity),h.name=t.createUniqueName(u.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(u){return n._getNodeRef(t.cache,l,u)})}}class Jv{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,n){const i=[];e.color=new st(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],yn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,on))}return Promise.all(i)}}class Qv{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class e0{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(l,l)}return Promise.all(s)}}class t0{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class n0{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class i0{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new st(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],yn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,on)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class r0{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class s0{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return t.attenuationColor=new st().setRGB(l[0],l[1],l[2],yn),Promise.all(s)}}class o0{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class a0{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return t.specularColor=new st().setRGB(l[0],l[1],l[2],yn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,on)),Promise.all(s)}}class l0{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class c0{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class u0{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class h0{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],l=i.images[a.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return n.loadTextureImage(e,a.source,u)}}class f0{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],l=i.images[a.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return n.loadTextureImage(e,a.source,u)}}class d0{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const u=i.byteOffset||0,h=i.byteLength||0,p=i.count,m=i.byteStride,_=new Uint8Array(l,u,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(p,m,_,i.mode,i.filter).then(function(v){return v.buffer}):a.ready.then(function(){const v=new ArrayBuffer(p*m);return a.decodeGltfBuffer(new Uint8Array(v),p,m,_,i.mode,i.filter),v})})}else return null}}class p0{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==On.TRIANGLES&&h.mode!==On.TRIANGLE_STRIP&&h.mode!==On.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],u={};for(const h in a)l.push(this.parser.getDependency("accessor",a[h]).then(p=>(u[h]=p,u[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const p=h.pop(),m=p.isGroup?p.children:[p],_=h[0].count,v=[];for(const T of m){const E=new at,y=new G,x=new Yn,U=new G(1,1,1),I=new cp(T.geometry,T.material,_);for(let P=0;P<_;P++)u.TRANSLATION&&y.fromBufferAttribute(u.TRANSLATION,P),u.ROTATION&&x.fromBufferAttribute(u.ROTATION,P),u.SCALE&&U.fromBufferAttribute(u.SCALE,P),I.setMatrixAt(P,E.compose(y,x,U));for(const P in u)if(P==="_COLOR_0"){const W=u[P];I.instanceColor=new Ul(W.array,W.itemSize,W.normalized)}else P!=="TRANSLATION"&&P!=="ROTATION"&&P!=="SCALE"&&T.geometry.setAttribute(P,u[P]);Gt.prototype.copy.call(I,T),this.parser.assignFinalMaterial(I),v.push(I)}return p.isGroup?(p.clear(),p.add(...v),p):v[0]}))}}const Wh="glTF",As=12,qu={JSON:1313821514,BIN:5130562};class m0{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,As),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-As,s=new DataView(e,As);let a=0;for(;a<i;){const l=s.getUint32(a,!0);a+=4;const u=s.getUint32(a,!0);if(a+=4,u===qu.JSON){const h=new Uint8Array(e,As+a,l);this.content=n.decode(h)}else if(u===qu.BIN){const h=As+a;this.body=e.slice(h,h+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class g0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},u={},h={};for(const p in a){const m=Bl[p]||p.toLowerCase();l[m]=a[p]}for(const p in e.attributes){const m=Bl[p]||p.toLowerCase();if(a[p]!==void 0){const _=n.accessors[e.attributes[p]],v=jr[_.componentType];h[m]=v.name,u[m]=_.normalized===!0}}return t.getDependency("bufferView",s).then(function(p){return new Promise(function(m,_){i.decodeDracoFile(p,function(v){for(const T in v.attributes){const E=v.attributes[T],y=u[T];y!==void 0&&(E.normalized=y)}m(v)},l,h,yn,_)})})}}class _0{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class x0{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class Xh extends Vs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=l*2,h=l*3,p=i-t,m=(n-t)/p,_=m*m,v=_*m,T=e*h,E=T-h,y=-2*v+3*_,x=v-_,U=1-y,I=x-_+m;for(let P=0;P!==l;P++){const W=a[E+P+l],k=a[E+P+u]*p,f=a[T+P+l],j=a[T+P]*p;s[P]=U*W+I*k+y*f+x*j}return s}}const v0=new Yn;class y0 extends Xh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return v0.fromArray(s).normalize().toArray(s),s}}const On={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ju={9728:xn,9729:Pn,9984:ah,9985:Po,9986:ws,9987:bi},Yu={33071:Ki,33648:Ho,10497:Zr},Va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},M0={CUBICSPLINE:void 0,LINEAR:Fs,STEP:Os},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function S0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new tc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),r.DefaultMaterial}function fr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ei(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function T0(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,p=e.length;h<p;h++){const m=e[h];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(i=!0),m.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],l=[],u=[];for(let h=0,p=e.length;h<p;h++){const m=e[h];if(n){const _=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):r.attributes.position;a.push(_)}if(i){const _=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):r.attributes.normal;l.push(_)}if(s){const _=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):r.attributes.color;u.push(_)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(u)]).then(function(h){const p=h[0],m=h[1],_=h[2];return n&&(r.morphAttributes.position=p),i&&(r.morphAttributes.normal=m),s&&(r.morphAttributes.color=_),r.morphTargetsRelative=!0,r})}function E0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function b0(r){let e;const t=r.extensions&&r.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wa(t.attributes):e=r.indices+":"+Wa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Wa(r.targets[n]);return e}function Wa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function kl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function A0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const w0=new at;class R0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $v,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const u=l.match(/Version\/(\d+)/);i=n&&u?parseInt(u[1],10):-1,s=l.indexOf("Firefox")>-1,a=s?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Uh(this.options.manager):this.textureLoader=new Op(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return fr(s,l,i),Ei(l,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(l)})).then(function(){for(const u of l.scenes)u.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let l=0,u=a.length;l<u;l++)e[a[l]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,l)=>{const u=this.associations.get(a);u!=null&&this.associations.set(l,u);for(const[h,p]of a.children.entries())s(p,l.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Ls.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Va[i.type],l=jr[i.componentType],u=i.normalized===!0,h=new l(i.count*a);return Promise.resolve(new vn(h,a,u))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const l=a[0],u=Va[i.type],h=jr[i.componentType],p=h.BYTES_PER_ELEMENT,m=p*u,_=i.byteOffset||0,v=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,T=i.normalized===!0;let E,y;if(v&&v!==m){const x=Math.floor(_/v),U="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let I=t.cache.get(U);I||(E=new h(l,x*v,i.count*v/p),I=new rp(E,v/p),t.cache.add(U,I)),y=new Zl(I,u,_%v/p,T)}else l===null?E=new h(i.count*u):E=new h(l,_,i.count*u),y=new vn(E,u,T);if(i.sparse!==void 0){const x=Va.SCALAR,U=jr[i.sparse.indices.componentType],I=i.sparse.indices.byteOffset||0,P=i.sparse.values.byteOffset||0,W=new U(a[1],I,i.sparse.count*x),k=new h(a[2],P,i.sparse.count*u);l!==null&&(y=new vn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let f=0,j=W.length;f<j;f++){const C=W[f];if(y.setX(C,k[f*u]),u>=2&&y.setY(C,k[f*u+1]),u>=3&&y.setZ(C,k[f*u+2]),u>=4&&y.setW(C,k[f*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=T}return y})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let l=this.textureLoader;if(a.uri){const u=n.manager.getHandler(a.uri);u!==null&&(l=u)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],l=s.images[t],u=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[u])return this.textureCache[u];const h=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=a.name||l.name||"",p.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(p.name=l.uri);const _=(s.samplers||{})[a.sampler]||{};return p.magFilter=ju[_.magFilter]||Pn,p.minFilter=ju[_.minFilter]||bi,p.wrapS=Yu[_.wrapS]||Zr,p.wrapT=Yu[_.wrapT]||Zr,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==xn&&p.minFilter!==Pn,i.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[u]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const a=i.images[e],l=self.URL||self.webkitURL;let u=a.uri||"",h=!1;if(a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(m){h=!0;const _=new Blob([m],{type:a.mimeType});return u=l.createObjectURL(_),u});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(u).then(function(m){return new Promise(function(_,v){let T=_;t.isImageBitmapLoader===!0&&(T=function(E){const y=new an(E);y.needsUpdate=!0,_(y)}),t.load(Ls.resolveURL(m,s.path),T,void 0,v)})}).then(function(m){return h===!0&&l.revokeObjectURL(u),Ei(m,a),m.userData.mimeType=a.mimeType||A0(a.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[yt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const u=s.associations.get(a);a=s.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),s.associations.set(a,u)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new Lh,si.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(l,u)),n=u}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new Ph,si.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(l,u)),n=u}if(i||s||a){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let u=this.cache.get(l);u||(u=n.clone(),s&&(u.vertexColors=!0),a&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(l,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return tc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const l={},u=s.extensions||{},h=[];if(u[yt.KHR_MATERIALS_UNLIT]){const m=i[yt.KHR_MATERIALS_UNLIT];a=m.getMaterialType(),h.push(m.extendParams(l,s,t))}else{const m=s.pbrMetallicRoughness||{};if(l.color=new st(1,1,1),l.opacity=1,Array.isArray(m.baseColorFactor)){const _=m.baseColorFactor;l.color.setRGB(_[0],_[1],_[2],yn),l.opacity=_[3]}m.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",m.baseColorTexture,on)),l.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,l.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",m.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",m.metallicRoughnessTexture))),a=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=Gn);const p=s.alphaMode||Ga.OPAQUE;if(p===Ga.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,p===Ga.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ii&&(h.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new rt(1,1),s.normalTexture.scale!==void 0)){const m=s.normalTexture.scale;l.normalScale.set(m,m)}if(s.occlusionTexture!==void 0&&a!==ii&&(h.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ii){const m=s.emissiveFactor;l.emissive=new st().setRGB(m[0],m[1],m[2],yn)}return s.emissiveTexture!==void 0&&a!==ii&&h.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,on)),Promise.all(h).then(function(){const m=new a(l);return s.name&&(m.name=s.name),Ei(m,s),t.associations.set(m,{materials:e}),s.extensions&&fr(i,m,s),m})}createUniqueName(e){const t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(l){return n[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(u){return Ku(u,l,t)})}const a=[];for(let l=0,u=e.length;l<u;l++){const h=e[l],p=b0(h),m=i[p];if(m)a.push(m.promise);else{let _;h.extensions&&h.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?_=s(h):_=Ku(new ci,h,t),i[p]={primitive:h,promise:_},a.push(_)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,l=[];for(let u=0,h=a.length;u<h;u++){const p=a[u].material===void 0?S0(this.cache):this.getDependency("material",a[u].material);l.push(p)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(u){const h=u.slice(0,u.length-1),p=u[u.length-1],m=[];for(let v=0,T=p.length;v<T;v++){const E=p[v],y=a[v];let x;const U=h[v];if(y.mode===On.TRIANGLES||y.mode===On.TRIANGLE_STRIP||y.mode===On.TRIANGLE_FAN||y.mode===void 0)x=s.isSkinnedMesh===!0?new op(E,U):new _n(E,U),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),y.mode===On.TRIANGLE_STRIP?x.geometry=Xu(x.geometry,mh):y.mode===On.TRIANGLE_FAN&&(x.geometry=Xu(x.geometry,Il));else if(y.mode===On.LINES)x=new fp(E,U);else if(y.mode===On.LINE_STRIP)x=new ec(E,U);else if(y.mode===On.LINE_LOOP)x=new dp(E,U);else if(y.mode===On.POINTS)x=new pp(E,U);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(x.geometry.morphAttributes).length>0&&E0(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),Ei(x,s),y.extensions&&fr(i,x,y),t.assignFinalMaterial(x),m.push(x)}for(let v=0,T=m.length;v<T;v++)t.associations.set(m[v],{meshes:e,primitives:v});if(m.length===1)return s.extensions&&fr(i,m[0],s),m[0];const _=new gr;s.extensions&&fr(i,_,s),t.associations.set(_,{meshes:e});for(let v=0,T=m.length;v<T;v++)_.add(m[v]);return _})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new gn(xh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new sc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,l=[],u=[];for(let h=0,p=a.length;h<p;h++){const m=a[h];if(m){l.push(m);const _=new at;s!==null&&_.fromArray(s.array,h*16),u.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Jl(l,u)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],l=[],u=[],h=[],p=[];for(let m=0,_=i.channels.length;m<_;m++){const v=i.channels[m],T=i.samplers[v.sampler],E=v.target,y=E.node,x=i.parameters!==void 0?i.parameters[T.input]:T.input,U=i.parameters!==void 0?i.parameters[T.output]:T.output;E.node!==void 0&&(a.push(this.getDependency("node",y)),l.push(this.getDependency("accessor",x)),u.push(this.getDependency("accessor",U)),h.push(T),p.push(E))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(u),Promise.all(h),Promise.all(p)]).then(function(m){const _=m[0],v=m[1],T=m[2],E=m[3],y=m[4],x=[];for(let U=0,I=_.length;U<I;U++){const P=_[U],W=v[U],k=T[U],f=E[U],j=y[U];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();const C=n._createAnimationTracks(P,W,k,f,j);if(C)for(let R=0;R<C.length;R++)x.push(C[R])}return new Tp(s,void 0,x)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let u=0,h=i.weights.length;u<h;u++)l.morphTargetInfluences[u]=i.weights[u]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],l=i.children||[];for(let h=0,p=l.length;h<p;h++)a.push(n.getDependency("node",l[h]));const u=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),u]).then(function(h){const p=h[0],m=h[1],_=h[2];_!==null&&p.traverse(function(v){v.isSkinnedMesh&&v.bind(_,w0)});for(let v=0,T=m.length;v<T;v++)p.add(m[v]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",l=[],u=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return u&&l.push(u),s.camera!==void 0&&l.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let p;if(s.isBone===!0?p=new Rh:h.length>1?p=new gr:h.length===1?p=h[0]:p=new Gt,p!==h[0])for(let m=0,_=h.length;m<_;m++)p.add(h[m]);if(s.name&&(p.userData.name=s.name,p.name=a),Ei(p,s),s.extensions&&fr(n,p,s),s.matrix!==void 0){const m=new at;m.fromArray(s.matrix),p.applyMatrix4(m)}else s.translation!==void 0&&p.position.fromArray(s.translation),s.rotation!==void 0&&p.quaternion.fromArray(s.rotation),s.scale!==void 0&&p.scale.fromArray(s.scale);return i.associations.has(p)||i.associations.set(p,{}),i.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new gr;n.name&&(s.name=i.createUniqueName(n.name)),Ei(s,n),n.extensions&&fr(t,s,n);const a=n.nodes||[],l=[];for(let u=0,h=a.length;u<h;u++)l.push(i.getDependency("node",a[u]));return Promise.all(l).then(function(u){for(let p=0,m=u.length;p<m;p++)s.add(u[p]);const h=p=>{const m=new Map;for(const[_,v]of i.associations)(_ instanceof si||_ instanceof an)&&m.set(_,v);return p.traverse(_=>{const v=i.associations.get(_);v!=null&&m.set(_,v)}),m};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],l=e.name?e.name:e.uuid,u=[];Xi[s.path]===Xi.weights?e.traverse(function(_){_.morphTargetInfluences&&u.push(_.name?_.name:_.uuid)}):u.push(l);let h;switch(Xi[s.path]){case Xi.weights:h=es;break;case Xi.rotation:h=ts;break;case Xi.translation:case Xi.scale:h=ns;break;default:switch(n.itemSize){case 1:h=es;break;case 2:case 3:default:h=ns;break}break}const p=i.interpolation!==void 0?M0[i.interpolation]:Fs,m=this._getArrayFromAccessor(n);for(let _=0,v=u.length;_<v;_++){const T=new h(u[_]+"."+Xi[s.path],t.array,m,p);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(T),a.push(T)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=kl(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ts?y0:Xh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function C0(r,e,t){const n=e.attributes,i=new Li;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],u=l.min,h=l.max;if(u!==void 0&&h!==void 0){if(i.set(new G(u[0],u[1],u[2]),new G(h[0],h[1],h[2])),l.normalized){const p=kl(jr[l.componentType]);i.min.multiplyScalar(p),i.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new G,u=new G;for(let h=0,p=s.length;h<p;h++){const m=s[h];if(m.POSITION!==void 0){const _=t.json.accessors[m.POSITION],v=_.min,T=_.max;if(v!==void 0&&T!==void 0){if(u.setX(Math.max(Math.abs(v[0]),Math.abs(T[0]))),u.setY(Math.max(Math.abs(v[1]),Math.abs(T[1]))),u.setZ(Math.max(Math.abs(v[2]),Math.abs(T[2]))),_.normalized){const E=kl(jr[_.componentType]);u.multiplyScalar(E)}l.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}r.boundingBox=i;const a=new li;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Ku(r,e,t){const n=e.attributes,i=[];function s(a,l){return t.getDependency("accessor",a).then(function(u){r.setAttribute(l,u)})}for(const a in n){const l=Bl[a]||a.toLowerCase();l in r.attributes||i.push(s(n[a],l))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});i.push(a)}return wt.workingColorSpace!==yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),Ei(r,e),C0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?T0(r,e.targets,t):r})}function P0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bo={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var L0=Bo.exports,$u;function D0(){return $u||($u=1,function(r){(function(e,t){r.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:L0,function(e,t){var n=[],i=Object.getPrototypeOf,s=n.slice,a=n.flat?function(o){return n.flat.call(o)}:function(o){return n.concat.apply([],o)},l=n.push,u=n.indexOf,h={},p=h.toString,m=h.hasOwnProperty,_=m.toString,v=_.call(Object),T={},E=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},y=function(c){return c!=null&&c===c.window},x=e.document,U={type:!0,src:!0,nonce:!0,noModule:!0};function I(o,c,d){d=d||x;var g,M,S=d.createElement("script");if(S.text=o,c)for(g in U)M=c[g]||c.getAttribute&&c.getAttribute(g),M&&S.setAttribute(g,M);d.head.appendChild(S).parentNode.removeChild(S)}function P(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?h[p.call(o)]||"object":typeof o}var W="3.7.1",k=/HTML$/i,f=function(o,c){return new f.fn.init(o,c)};f.fn=f.prototype={jquery:W,constructor:f,length:0,toArray:function(){return s.call(this)},get:function(o){return o==null?s.call(this):o<0?this[o+this.length]:this[o]},pushStack:function(o){var c=f.merge(this.constructor(),o);return c.prevObject=this,c},each:function(o){return f.each(this,o)},map:function(o){return this.pushStack(f.map(this,function(c,d){return o.call(c,d,c)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(f.grep(this,function(o,c){return(c+1)%2}))},odd:function(){return this.pushStack(f.grep(this,function(o,c){return c%2}))},eq:function(o){var c=this.length,d=+o+(o<0?c:0);return this.pushStack(d>=0&&d<c?[this[d]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},f.extend=f.fn.extend=function(){var o,c,d,g,M,S,b=arguments[0]||{},O=1,N=arguments.length,z=!1;for(typeof b=="boolean"&&(z=b,b=arguments[O]||{},O++),typeof b!="object"&&!E(b)&&(b={}),O===N&&(b=this,O--);O<N;O++)if((o=arguments[O])!=null)for(c in o)g=o[c],!(c==="__proto__"||b===g)&&(z&&g&&(f.isPlainObject(g)||(M=Array.isArray(g)))?(d=b[c],M&&!Array.isArray(d)?S=[]:!M&&!f.isPlainObject(d)?S={}:S=d,M=!1,b[c]=f.extend(z,S,g)):g!==void 0&&(b[c]=g));return b},f.extend({expando:"jQuery"+(W+Math.random()).replace(/\D/g,""),isReady:!0,error:function(o){throw new Error(o)},noop:function(){},isPlainObject:function(o){var c,d;return!o||p.call(o)!=="[object Object]"?!1:(c=i(o),c?(d=m.call(c,"constructor")&&c.constructor,typeof d=="function"&&_.call(d)===v):!0)},isEmptyObject:function(o){var c;for(c in o)return!1;return!0},globalEval:function(o,c,d){I(o,{nonce:c&&c.nonce},d)},each:function(o,c){var d,g=0;if(j(o))for(d=o.length;g<d&&c.call(o[g],g,o[g])!==!1;g++);else for(g in o)if(c.call(o[g],g,o[g])===!1)break;return o},text:function(o){var c,d="",g=0,M=o.nodeType;if(!M)for(;c=o[g++];)d+=f.text(c);return M===1||M===11?o.textContent:M===9?o.documentElement.textContent:M===3||M===4?o.nodeValue:d},makeArray:function(o,c){var d=c||[];return o!=null&&(j(Object(o))?f.merge(d,typeof o=="string"?[o]:o):l.call(d,o)),d},inArray:function(o,c,d){return c==null?-1:u.call(c,o,d)},isXMLDoc:function(o){var c=o&&o.namespaceURI,d=o&&(o.ownerDocument||o).documentElement;return!k.test(c||d&&d.nodeName||"HTML")},merge:function(o,c){for(var d=+c.length,g=0,M=o.length;g<d;g++)o[M++]=c[g];return o.length=M,o},grep:function(o,c,d){for(var g,M=[],S=0,b=o.length,O=!d;S<b;S++)g=!c(o[S],S),g!==O&&M.push(o[S]);return M},map:function(o,c,d){var g,M,S=0,b=[];if(j(o))for(g=o.length;S<g;S++)M=c(o[S],S,d),M!=null&&b.push(M);else for(S in o)M=c(o[S],S,d),M!=null&&b.push(M);return a(b)},guid:1,support:T}),typeof Symbol=="function"&&(f.fn[Symbol.iterator]=n[Symbol.iterator]),f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(o,c){h["[object "+c+"]"]=c.toLowerCase()});function j(o){var c=!!o&&"length"in o&&o.length,d=P(o);return E(o)||y(o)?!1:d==="array"||c===0||typeof c=="number"&&c>0&&c-1 in o}function C(o,c){return o.nodeName&&o.nodeName.toLowerCase()===c.toLowerCase()}var R=n.pop,H=n.sort,ue=n.splice,Y="[\\x20\\t\\r\\n\\f]",de=new RegExp("^"+Y+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Y+"+$","g");f.contains=function(o,c){var d=c&&c.parentNode;return o===d||!!(d&&d.nodeType===1&&(o.contains?o.contains(d):o.compareDocumentPosition&&o.compareDocumentPosition(d)&16))};var me=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function fe(o,c){return c?o==="\0"?"�":o.slice(0,-1)+"\\"+o.charCodeAt(o.length-1).toString(16)+" ":"\\"+o}f.escapeSelector=function(o){return(o+"").replace(me,fe)};var pe=x,se=l;(function(){var o,c,d,g,M,S=se,b,O,N,z,ne,ae=f.expando,J=0,ge=0,tt=Ys(),At=Ys(),ct=Ys(),ln=Ys(),Jt=function(L,B){return L===B&&(M=!0),0},Zn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Jn="(?:\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Tt="\\["+Y+"*("+Jn+")(?:"+Y+"*([*^$|!~]?=)"+Y+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Jn+"))|)"+Y+"*\\]",nr=":("+Jn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Tt+")*)|.*)\\)|)",Rt=new RegExp(Y+"+","g"),jt=new RegExp("^"+Y+"*,"+Y+"*"),ms=new RegExp("^"+Y+"*([>+~]|"+Y+")"+Y+"*"),ta=new RegExp(Y+"|>"),Qn=new RegExp(nr),gs=new RegExp("^"+Jn+"$"),ei={ID:new RegExp("^#("+Jn+")"),CLASS:new RegExp("^\\.("+Jn+")"),TAG:new RegExp("^("+Jn+"|[*])"),ATTR:new RegExp("^"+Tt),PSEUDO:new RegExp("^"+nr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Y+"*(even|odd|(([+-]|)(\\d*)n|)"+Y+"*(?:([+-]|)"+Y+"*(\\d+)|))"+Y+"*\\)|)","i"),bool:new RegExp("^(?:"+Zn+")$","i"),needsContext:new RegExp("^"+Y+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Y+"*((?:-\\d)?\\d*)"+Y+"*\\)|)(?=[^-]|$)","i")},Oi=/^(?:input|select|textarea|button)$/i,Fi=/^h\d$/i,Dn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,na=/[+~]/,mi=new RegExp("\\\\[\\da-fA-F]{1,6}"+Y+"?|\\\\([^\\r\\n\\f])","g"),gi=function(L,B){var K="0x"+L.slice(1)-65536;return B||(K<0?String.fromCharCode(K+65536):String.fromCharCode(K>>10|55296,K&1023|56320))},_f=function(){Bi()},xf=$s(function(L){return L.disabled===!0&&C(L,"fieldset")},{dir:"parentNode",next:"legend"});function vf(){try{return b.activeElement}catch{}}try{S.apply(n=s.call(pe.childNodes),pe.childNodes),n[pe.childNodes.length].nodeType}catch{S={apply:function(B,K){se.apply(B,s.call(K))},call:function(B){se.apply(B,s.call(arguments,1))}}}function Ut(L,B,K,te){var oe,ve,Ce,Be,Pe,xt,Qe,it=B&&B.ownerDocument,vt=B?B.nodeType:9;if(K=K||[],typeof L!="string"||!L||vt!==1&&vt!==9&&vt!==11)return K;if(!te&&(Bi(B),B=B||b,N)){if(vt!==11&&(Pe=Dn.exec(L)))if(oe=Pe[1]){if(vt===9)if(Ce=B.getElementById(oe)){if(Ce.id===oe)return S.call(K,Ce),K}else return K;else if(it&&(Ce=it.getElementById(oe))&&Ut.contains(B,Ce)&&Ce.id===oe)return S.call(K,Ce),K}else{if(Pe[2])return S.apply(K,B.getElementsByTagName(L)),K;if((oe=Pe[3])&&B.getElementsByClassName)return S.apply(K,B.getElementsByClassName(oe)),K}if(!ln[L+" "]&&(!z||!z.test(L))){if(Qe=L,it=B,vt===1&&(ta.test(L)||ms.test(L))){for(it=na.test(L)&&ia(B.parentNode)||B,(it!=B||!T.scope)&&((Be=B.getAttribute("id"))?Be=f.escapeSelector(Be):B.setAttribute("id",Be=ae)),xt=_s(L),ve=xt.length;ve--;)xt[ve]=(Be?"#"+Be:":scope")+" "+Ks(xt[ve]);Qe=xt.join(",")}try{return S.apply(K,it.querySelectorAll(Qe)),K}catch{ln(L,!0)}finally{Be===ae&&B.removeAttribute("id")}}}return Sc(L.replace(de,"$1"),B,K,te)}function Ys(){var L=[];function B(K,te){return L.push(K+" ")>c.cacheLength&&delete B[L.shift()],B[K+" "]=te}return B}function kn(L){return L[ae]=!0,L}function Er(L){var B=b.createElement("fieldset");try{return!!L(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function yf(L){return function(B){return C(B,"input")&&B.type===L}}function Mf(L){return function(B){return(C(B,"input")||C(B,"button"))&&B.type===L}}function yc(L){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===L:B.disabled===L:B.isDisabled===L||B.isDisabled!==!L&&xf(B)===L:B.disabled===L:"label"in B?B.disabled===L:!1}}function ir(L){return kn(function(B){return B=+B,kn(function(K,te){for(var oe,ve=L([],K.length,B),Ce=ve.length;Ce--;)K[oe=ve[Ce]]&&(K[oe]=!(te[oe]=K[oe]))})})}function ia(L){return L&&typeof L.getElementsByTagName<"u"&&L}function Bi(L){var B,K=L?L.ownerDocument||L:pe;return K==b||K.nodeType!==9||!K.documentElement||(b=K,O=b.documentElement,N=!f.isXMLDoc(b),ne=O.matches||O.webkitMatchesSelector||O.msMatchesSelector,O.msMatchesSelector&&pe!=b&&(B=b.defaultView)&&B.top!==B&&B.addEventListener("unload",_f),T.getById=Er(function(te){return O.appendChild(te).id=f.expando,!b.getElementsByName||!b.getElementsByName(f.expando).length}),T.disconnectedMatch=Er(function(te){return ne.call(te,"*")}),T.scope=Er(function(){return b.querySelectorAll(":scope")}),T.cssHas=Er(function(){try{return b.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),T.getById?(c.filter.ID=function(te){var oe=te.replace(mi,gi);return function(ve){return ve.getAttribute("id")===oe}},c.find.ID=function(te,oe){if(typeof oe.getElementById<"u"&&N){var ve=oe.getElementById(te);return ve?[ve]:[]}}):(c.filter.ID=function(te){var oe=te.replace(mi,gi);return function(ve){var Ce=typeof ve.getAttributeNode<"u"&&ve.getAttributeNode("id");return Ce&&Ce.value===oe}},c.find.ID=function(te,oe){if(typeof oe.getElementById<"u"&&N){var ve,Ce,Be,Pe=oe.getElementById(te);if(Pe){if(ve=Pe.getAttributeNode("id"),ve&&ve.value===te)return[Pe];for(Be=oe.getElementsByName(te),Ce=0;Pe=Be[Ce++];)if(ve=Pe.getAttributeNode("id"),ve&&ve.value===te)return[Pe]}return[]}}),c.find.TAG=function(te,oe){return typeof oe.getElementsByTagName<"u"?oe.getElementsByTagName(te):oe.querySelectorAll(te)},c.find.CLASS=function(te,oe){if(typeof oe.getElementsByClassName<"u"&&N)return oe.getElementsByClassName(te)},z=[],Er(function(te){var oe;O.appendChild(te).innerHTML="<a id='"+ae+"' href='' disabled='disabled'></a><select id='"+ae+"-\r\\' disabled='disabled'><option selected=''></option></select>",te.querySelectorAll("[selected]").length||z.push("\\["+Y+"*(?:value|"+Zn+")"),te.querySelectorAll("[id~="+ae+"-]").length||z.push("~="),te.querySelectorAll("a#"+ae+"+*").length||z.push(".#.+[+~]"),te.querySelectorAll(":checked").length||z.push(":checked"),oe=b.createElement("input"),oe.setAttribute("type","hidden"),te.appendChild(oe).setAttribute("name","D"),O.appendChild(te).disabled=!0,te.querySelectorAll(":disabled").length!==2&&z.push(":enabled",":disabled"),oe=b.createElement("input"),oe.setAttribute("name",""),te.appendChild(oe),te.querySelectorAll("[name='']").length||z.push("\\["+Y+"*name"+Y+"*="+Y+`*(?:''|"")`)}),T.cssHas||z.push(":has"),z=z.length&&new RegExp(z.join("|")),Jt=function(te,oe){if(te===oe)return M=!0,0;var ve=!te.compareDocumentPosition-!oe.compareDocumentPosition;return ve||(ve=(te.ownerDocument||te)==(oe.ownerDocument||oe)?te.compareDocumentPosition(oe):1,ve&1||!T.sortDetached&&oe.compareDocumentPosition(te)===ve?te===b||te.ownerDocument==pe&&Ut.contains(pe,te)?-1:oe===b||oe.ownerDocument==pe&&Ut.contains(pe,oe)?1:g?u.call(g,te)-u.call(g,oe):0:ve&4?-1:1)}),b}Ut.matches=function(L,B){return Ut(L,null,null,B)},Ut.matchesSelector=function(L,B){if(Bi(L),N&&!ln[B+" "]&&(!z||!z.test(B)))try{var K=ne.call(L,B);if(K||T.disconnectedMatch||L.document&&L.document.nodeType!==11)return K}catch{ln(B,!0)}return Ut(B,b,null,[L]).length>0},Ut.contains=function(L,B){return(L.ownerDocument||L)!=b&&Bi(L),f.contains(L,B)},Ut.attr=function(L,B){(L.ownerDocument||L)!=b&&Bi(L);var K=c.attrHandle[B.toLowerCase()],te=K&&m.call(c.attrHandle,B.toLowerCase())?K(L,B,!N):void 0;return te!==void 0?te:L.getAttribute(B)},Ut.error=function(L){throw new Error("Syntax error, unrecognized expression: "+L)},f.uniqueSort=function(L){var B,K=[],te=0,oe=0;if(M=!T.sortStable,g=!T.sortStable&&s.call(L,0),H.call(L,Jt),M){for(;B=L[oe++];)B===L[oe]&&(te=K.push(oe));for(;te--;)ue.call(L,K[te],1)}return g=null,L},f.fn.uniqueSort=function(){return this.pushStack(f.uniqueSort(s.apply(this)))},c=f.expr={cacheLength:50,createPseudo:kn,match:ei,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(L){return L[1]=L[1].replace(mi,gi),L[3]=(L[3]||L[4]||L[5]||"").replace(mi,gi),L[2]==="~="&&(L[3]=" "+L[3]+" "),L.slice(0,4)},CHILD:function(L){return L[1]=L[1].toLowerCase(),L[1].slice(0,3)==="nth"?(L[3]||Ut.error(L[0]),L[4]=+(L[4]?L[5]+(L[6]||1):2*(L[3]==="even"||L[3]==="odd")),L[5]=+(L[7]+L[8]||L[3]==="odd")):L[3]&&Ut.error(L[0]),L},PSEUDO:function(L){var B,K=!L[6]&&L[2];return ei.CHILD.test(L[0])?null:(L[3]?L[2]=L[4]||L[5]||"":K&&Qn.test(K)&&(B=_s(K,!0))&&(B=K.indexOf(")",K.length-B)-K.length)&&(L[0]=L[0].slice(0,B),L[2]=K.slice(0,B)),L.slice(0,3))}},filter:{TAG:function(L){var B=L.replace(mi,gi).toLowerCase();return L==="*"?function(){return!0}:function(K){return C(K,B)}},CLASS:function(L){var B=tt[L+" "];return B||(B=new RegExp("(^|"+Y+")"+L+"("+Y+"|$)"))&&tt(L,function(K){return B.test(typeof K.className=="string"&&K.className||typeof K.getAttribute<"u"&&K.getAttribute("class")||"")})},ATTR:function(L,B,K){return function(te){var oe=Ut.attr(te,L);return oe==null?B==="!=":B?(oe+="",B==="="?oe===K:B==="!="?oe!==K:B==="^="?K&&oe.indexOf(K)===0:B==="*="?K&&oe.indexOf(K)>-1:B==="$="?K&&oe.slice(-K.length)===K:B==="~="?(" "+oe.replace(Rt," ")+" ").indexOf(K)>-1:B==="|="?oe===K||oe.slice(0,K.length+1)===K+"-":!1):!0}},CHILD:function(L,B,K,te,oe){var ve=L.slice(0,3)!=="nth",Ce=L.slice(-4)!=="last",Be=B==="of-type";return te===1&&oe===0?function(Pe){return!!Pe.parentNode}:function(Pe,xt,Qe){var it,vt,Ye,Vt,En,cn=ve!==Ce?"nextSibling":"previousSibling",In=Pe.parentNode,ti=Be&&Pe.nodeName.toLowerCase(),br=!Qe&&!Be,dn=!1;if(In){if(ve){for(;cn;){for(Ye=Pe;Ye=Ye[cn];)if(Be?C(Ye,ti):Ye.nodeType===1)return!1;En=cn=L==="only"&&!En&&"nextSibling"}return!0}if(En=[Ce?In.firstChild:In.lastChild],Ce&&br){for(vt=In[ae]||(In[ae]={}),it=vt[L]||[],Vt=it[0]===J&&it[1],dn=Vt&&it[2],Ye=Vt&&In.childNodes[Vt];Ye=++Vt&&Ye&&Ye[cn]||(dn=Vt=0)||En.pop();)if(Ye.nodeType===1&&++dn&&Ye===Pe){vt[L]=[J,Vt,dn];break}}else if(br&&(vt=Pe[ae]||(Pe[ae]={}),it=vt[L]||[],Vt=it[0]===J&&it[1],dn=Vt),dn===!1)for(;(Ye=++Vt&&Ye&&Ye[cn]||(dn=Vt=0)||En.pop())&&!((Be?C(Ye,ti):Ye.nodeType===1)&&++dn&&(br&&(vt=Ye[ae]||(Ye[ae]={}),vt[L]=[J,dn]),Ye===Pe)););return dn-=oe,dn===te||dn%te===0&&dn/te>=0}}},PSEUDO:function(L,B){var K,te=c.pseudos[L]||c.setFilters[L.toLowerCase()]||Ut.error("unsupported pseudo: "+L);return te[ae]?te(B):te.length>1?(K=[L,L,"",B],c.setFilters.hasOwnProperty(L.toLowerCase())?kn(function(oe,ve){for(var Ce,Be=te(oe,B),Pe=Be.length;Pe--;)Ce=u.call(oe,Be[Pe]),oe[Ce]=!(ve[Ce]=Be[Pe])}):function(oe){return te(oe,0,K)}):te}},pseudos:{not:kn(function(L){var B=[],K=[],te=aa(L.replace(de,"$1"));return te[ae]?kn(function(oe,ve,Ce,Be){for(var Pe,xt=te(oe,null,Be,[]),Qe=oe.length;Qe--;)(Pe=xt[Qe])&&(oe[Qe]=!(ve[Qe]=Pe))}):function(oe,ve,Ce){return B[0]=oe,te(B,null,Ce,K),B[0]=null,!K.pop()}}),has:kn(function(L){return function(B){return Ut(L,B).length>0}}),contains:kn(function(L){return L=L.replace(mi,gi),function(B){return(B.textContent||f.text(B)).indexOf(L)>-1}}),lang:kn(function(L){return gs.test(L||"")||Ut.error("unsupported lang: "+L),L=L.replace(mi,gi).toLowerCase(),function(B){var K;do if(K=N?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return K=K.toLowerCase(),K===L||K.indexOf(L+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(L){var B=e.location&&e.location.hash;return B&&B.slice(1)===L.id},root:function(L){return L===O},focus:function(L){return L===vf()&&b.hasFocus()&&!!(L.type||L.href||~L.tabIndex)},enabled:yc(!1),disabled:yc(!0),checked:function(L){return C(L,"input")&&!!L.checked||C(L,"option")&&!!L.selected},selected:function(L){return L.parentNode&&L.parentNode.selectedIndex,L.selected===!0},empty:function(L){for(L=L.firstChild;L;L=L.nextSibling)if(L.nodeType<6)return!1;return!0},parent:function(L){return!c.pseudos.empty(L)},header:function(L){return Fi.test(L.nodeName)},input:function(L){return Oi.test(L.nodeName)},button:function(L){return C(L,"input")&&L.type==="button"||C(L,"button")},text:function(L){var B;return C(L,"input")&&L.type==="text"&&((B=L.getAttribute("type"))==null||B.toLowerCase()==="text")},first:ir(function(){return[0]}),last:ir(function(L,B){return[B-1]}),eq:ir(function(L,B,K){return[K<0?K+B:K]}),even:ir(function(L,B){for(var K=0;K<B;K+=2)L.push(K);return L}),odd:ir(function(L,B){for(var K=1;K<B;K+=2)L.push(K);return L}),lt:ir(function(L,B,K){var te;for(K<0?te=K+B:K>B?te=B:te=K;--te>=0;)L.push(te);return L}),gt:ir(function(L,B,K){for(var te=K<0?K+B:K;++te<B;)L.push(te);return L})}},c.pseudos.nth=c.pseudos.eq;for(o in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[o]=yf(o);for(o in{submit:!0,reset:!0})c.pseudos[o]=Mf(o);function Mc(){}Mc.prototype=c.filters=c.pseudos,c.setFilters=new Mc;function _s(L,B){var K,te,oe,ve,Ce,Be,Pe,xt=At[L+" "];if(xt)return B?0:xt.slice(0);for(Ce=L,Be=[],Pe=c.preFilter;Ce;){(!K||(te=jt.exec(Ce)))&&(te&&(Ce=Ce.slice(te[0].length)||Ce),Be.push(oe=[])),K=!1,(te=ms.exec(Ce))&&(K=te.shift(),oe.push({value:K,type:te[0].replace(de," ")}),Ce=Ce.slice(K.length));for(ve in c.filter)(te=ei[ve].exec(Ce))&&(!Pe[ve]||(te=Pe[ve](te)))&&(K=te.shift(),oe.push({value:K,type:ve,matches:te}),Ce=Ce.slice(K.length));if(!K)break}return B?Ce.length:Ce?Ut.error(L):At(L,Be).slice(0)}function Ks(L){for(var B=0,K=L.length,te="";B<K;B++)te+=L[B].value;return te}function $s(L,B,K){var te=B.dir,oe=B.next,ve=oe||te,Ce=K&&ve==="parentNode",Be=ge++;return B.first?function(Pe,xt,Qe){for(;Pe=Pe[te];)if(Pe.nodeType===1||Ce)return L(Pe,xt,Qe);return!1}:function(Pe,xt,Qe){var it,vt,Ye=[J,Be];if(Qe){for(;Pe=Pe[te];)if((Pe.nodeType===1||Ce)&&L(Pe,xt,Qe))return!0}else for(;Pe=Pe[te];)if(Pe.nodeType===1||Ce)if(vt=Pe[ae]||(Pe[ae]={}),oe&&C(Pe,oe))Pe=Pe[te]||Pe;else{if((it=vt[ve])&&it[0]===J&&it[1]===Be)return Ye[2]=it[2];if(vt[ve]=Ye,Ye[2]=L(Pe,xt,Qe))return!0}return!1}}function ra(L){return L.length>1?function(B,K,te){for(var oe=L.length;oe--;)if(!L[oe](B,K,te))return!1;return!0}:L[0]}function Sf(L,B,K){for(var te=0,oe=B.length;te<oe;te++)Ut(L,B[te],K);return K}function Zs(L,B,K,te,oe){for(var ve,Ce=[],Be=0,Pe=L.length,xt=B!=null;Be<Pe;Be++)(ve=L[Be])&&(!K||K(ve,te,oe))&&(Ce.push(ve),xt&&B.push(Be));return Ce}function sa(L,B,K,te,oe,ve){return te&&!te[ae]&&(te=sa(te)),oe&&!oe[ae]&&(oe=sa(oe,ve)),kn(function(Ce,Be,Pe,xt){var Qe,it,vt,Ye,Vt=[],En=[],cn=Be.length,In=Ce||Sf(B||"*",Pe.nodeType?[Pe]:Pe,[]),ti=L&&(Ce||!B)?Zs(In,Vt,L,Pe,xt):In;if(K?(Ye=oe||(Ce?L:cn||te)?[]:Be,K(ti,Ye,Pe,xt)):Ye=ti,te)for(Qe=Zs(Ye,En),te(Qe,[],Pe,xt),it=Qe.length;it--;)(vt=Qe[it])&&(Ye[En[it]]=!(ti[En[it]]=vt));if(Ce){if(oe||L){if(oe){for(Qe=[],it=Ye.length;it--;)(vt=Ye[it])&&Qe.push(ti[it]=vt);oe(null,Ye=[],Qe,xt)}for(it=Ye.length;it--;)(vt=Ye[it])&&(Qe=oe?u.call(Ce,vt):Vt[it])>-1&&(Ce[Qe]=!(Be[Qe]=vt))}}else Ye=Zs(Ye===Be?Ye.splice(cn,Ye.length):Ye),oe?oe(null,Be,Ye,xt):S.apply(Be,Ye)})}function oa(L){for(var B,K,te,oe=L.length,ve=c.relative[L[0].type],Ce=ve||c.relative[" "],Be=ve?1:0,Pe=$s(function(it){return it===B},Ce,!0),xt=$s(function(it){return u.call(B,it)>-1},Ce,!0),Qe=[function(it,vt,Ye){var Vt=!ve&&(Ye||vt!=d)||((B=vt).nodeType?Pe(it,vt,Ye):xt(it,vt,Ye));return B=null,Vt}];Be<oe;Be++)if(K=c.relative[L[Be].type])Qe=[$s(ra(Qe),K)];else{if(K=c.filter[L[Be].type].apply(null,L[Be].matches),K[ae]){for(te=++Be;te<oe&&!c.relative[L[te].type];te++);return sa(Be>1&&ra(Qe),Be>1&&Ks(L.slice(0,Be-1).concat({value:L[Be-2].type===" "?"*":""})).replace(de,"$1"),K,Be<te&&oa(L.slice(Be,te)),te<oe&&oa(L=L.slice(te)),te<oe&&Ks(L))}Qe.push(K)}return ra(Qe)}function Tf(L,B){var K=B.length>0,te=L.length>0,oe=function(ve,Ce,Be,Pe,xt){var Qe,it,vt,Ye=0,Vt="0",En=ve&&[],cn=[],In=d,ti=ve||te&&c.find.TAG("*",xt),br=J+=In==null?1:Math.random()||.1,dn=ti.length;for(xt&&(d=Ce==b||Ce||xt);Vt!==dn&&(Qe=ti[Vt])!=null;Vt++){if(te&&Qe){for(it=0,!Ce&&Qe.ownerDocument!=b&&(Bi(Qe),Be=!N);vt=L[it++];)if(vt(Qe,Ce||b,Be)){S.call(Pe,Qe);break}xt&&(J=br)}K&&((Qe=!vt&&Qe)&&Ye--,ve&&En.push(Qe))}if(Ye+=Vt,K&&Vt!==Ye){for(it=0;vt=B[it++];)vt(En,cn,Ce,Be);if(ve){if(Ye>0)for(;Vt--;)En[Vt]||cn[Vt]||(cn[Vt]=R.call(Pe));cn=Zs(cn)}S.apply(Pe,cn),xt&&!ve&&cn.length>0&&Ye+B.length>1&&f.uniqueSort(Pe)}return xt&&(J=br,d=In),En};return K?kn(oe):oe}function aa(L,B){var K,te=[],oe=[],ve=ct[L+" "];if(!ve){for(B||(B=_s(L)),K=B.length;K--;)ve=oa(B[K]),ve[ae]?te.push(ve):oe.push(ve);ve=ct(L,Tf(oe,te)),ve.selector=L}return ve}function Sc(L,B,K,te){var oe,ve,Ce,Be,Pe,xt=typeof L=="function"&&L,Qe=!te&&_s(L=xt.selector||L);if(K=K||[],Qe.length===1){if(ve=Qe[0]=Qe[0].slice(0),ve.length>2&&(Ce=ve[0]).type==="ID"&&B.nodeType===9&&N&&c.relative[ve[1].type]){if(B=(c.find.ID(Ce.matches[0].replace(mi,gi),B)||[])[0],B)xt&&(B=B.parentNode);else return K;L=L.slice(ve.shift().value.length)}for(oe=ei.needsContext.test(L)?0:ve.length;oe--&&(Ce=ve[oe],!c.relative[Be=Ce.type]);)if((Pe=c.find[Be])&&(te=Pe(Ce.matches[0].replace(mi,gi),na.test(ve[0].type)&&ia(B.parentNode)||B))){if(ve.splice(oe,1),L=te.length&&Ks(ve),!L)return S.apply(K,te),K;break}}return(xt||aa(L,Qe))(te,B,!N,K,!B||na.test(L)&&ia(B.parentNode)||B),K}T.sortStable=ae.split("").sort(Jt).join("")===ae,Bi(),T.sortDetached=Er(function(L){return L.compareDocumentPosition(b.createElement("fieldset"))&1}),f.find=Ut,f.expr[":"]=f.expr.pseudos,f.unique=f.uniqueSort,Ut.compile=aa,Ut.select=Sc,Ut.setDocument=Bi,Ut.tokenize=_s,Ut.escape=f.escapeSelector,Ut.getText=f.text,Ut.isXML=f.isXMLDoc,Ut.selectors=f.expr,Ut.support=f.support,Ut.uniqueSort=f.uniqueSort})();var Me=function(o,c,d){for(var g=[],M=d!==void 0;(o=o[c])&&o.nodeType!==9;)if(o.nodeType===1){if(M&&f(o).is(d))break;g.push(o)}return g},Ie=function(o,c){for(var d=[];o;o=o.nextSibling)o.nodeType===1&&o!==c&&d.push(o);return d},Ve=f.expr.match.needsContext,lt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Pt(o,c,d){return E(c)?f.grep(o,function(g,M){return!!c.call(g,M,g)!==d}):c.nodeType?f.grep(o,function(g){return g===c!==d}):typeof c!="string"?f.grep(o,function(g){return u.call(c,g)>-1!==d}):f.filter(c,o,d)}f.filter=function(o,c,d){var g=c[0];return d&&(o=":not("+o+")"),c.length===1&&g.nodeType===1?f.find.matchesSelector(g,o)?[g]:[]:f.find.matches(o,f.grep(c,function(M){return M.nodeType===1}))},f.fn.extend({find:function(o){var c,d,g=this.length,M=this;if(typeof o!="string")return this.pushStack(f(o).filter(function(){for(c=0;c<g;c++)if(f.contains(M[c],this))return!0}));for(d=this.pushStack([]),c=0;c<g;c++)f.find(o,M[c],d);return g>1?f.uniqueSort(d):d},filter:function(o){return this.pushStack(Pt(this,o||[],!1))},not:function(o){return this.pushStack(Pt(this,o||[],!0))},is:function(o){return!!Pt(this,typeof o=="string"&&Ve.test(o)?f(o):o||[],!1).length}});var ce,ye=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Fe=f.fn.init=function(o,c,d){var g,M;if(!o)return this;if(d=d||ce,typeof o=="string")if(o[0]==="<"&&o[o.length-1]===">"&&o.length>=3?g=[null,o,null]:g=ye.exec(o),g&&(g[1]||!c))if(g[1]){if(c=c instanceof f?c[0]:c,f.merge(this,f.parseHTML(g[1],c&&c.nodeType?c.ownerDocument||c:x,!0)),lt.test(g[1])&&f.isPlainObject(c))for(g in c)E(this[g])?this[g](c[g]):this.attr(g,c[g]);return this}else return M=x.getElementById(g[2]),M&&(this[0]=M,this.length=1),this;else return!c||c.jquery?(c||d).find(o):this.constructor(c).find(o);else{if(o.nodeType)return this[0]=o,this.length=1,this;if(E(o))return d.ready!==void 0?d.ready(o):o(f)}return f.makeArray(o,this)};Fe.prototype=f.fn,ce=f(x);var be=/^(?:parents|prev(?:Until|All))/,Ke={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({has:function(o){var c=f(o,this),d=c.length;return this.filter(function(){for(var g=0;g<d;g++)if(f.contains(this,c[g]))return!0})},closest:function(o,c){var d,g=0,M=this.length,S=[],b=typeof o!="string"&&f(o);if(!Ve.test(o)){for(;g<M;g++)for(d=this[g];d&&d!==c;d=d.parentNode)if(d.nodeType<11&&(b?b.index(d)>-1:d.nodeType===1&&f.find.matchesSelector(d,o))){S.push(d);break}}return this.pushStack(S.length>1?f.uniqueSort(S):S)},index:function(o){return o?typeof o=="string"?u.call(f(o),this[0]):u.call(this,o.jquery?o[0]:o):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(o,c){return this.pushStack(f.uniqueSort(f.merge(this.get(),f(o,c))))},addBack:function(o){return this.add(o==null?this.prevObject:this.prevObject.filter(o))}});function Et(o,c){for(;(o=o[c])&&o.nodeType!==1;);return o}f.each({parent:function(o){var c=o.parentNode;return c&&c.nodeType!==11?c:null},parents:function(o){return Me(o,"parentNode")},parentsUntil:function(o,c,d){return Me(o,"parentNode",d)},next:function(o){return Et(o,"nextSibling")},prev:function(o){return Et(o,"previousSibling")},nextAll:function(o){return Me(o,"nextSibling")},prevAll:function(o){return Me(o,"previousSibling")},nextUntil:function(o,c,d){return Me(o,"nextSibling",d)},prevUntil:function(o,c,d){return Me(o,"previousSibling",d)},siblings:function(o){return Ie((o.parentNode||{}).firstChild,o)},children:function(o){return Ie(o.firstChild)},contents:function(o){return o.contentDocument!=null&&i(o.contentDocument)?o.contentDocument:(C(o,"template")&&(o=o.content||o),f.merge([],o.childNodes))}},function(o,c){f.fn[o]=function(d,g){var M=f.map(this,c,d);return o.slice(-5)!=="Until"&&(g=d),g&&typeof g=="string"&&(M=f.filter(g,M)),this.length>1&&(Ke[o]||f.uniqueSort(M),be.test(o)&&M.reverse()),this.pushStack(M)}});var He=/[^\x20\t\r\n\f]+/g;function Xt(o){var c={};return f.each(o.match(He)||[],function(d,g){c[g]=!0}),c}f.Callbacks=function(o){o=typeof o=="string"?Xt(o):f.extend({},o);var c,d,g,M,S=[],b=[],O=-1,N=function(){for(M=M||o.once,g=c=!0;b.length;O=-1)for(d=b.shift();++O<S.length;)S[O].apply(d[0],d[1])===!1&&o.stopOnFalse&&(O=S.length,d=!1);o.memory||(d=!1),c=!1,M&&(d?S=[]:S="")},z={add:function(){return S&&(d&&!c&&(O=S.length-1,b.push(d)),function ne(ae){f.each(ae,function(J,ge){E(ge)?(!o.unique||!z.has(ge))&&S.push(ge):ge&&ge.length&&P(ge)!=="string"&&ne(ge)})}(arguments),d&&!c&&N()),this},remove:function(){return f.each(arguments,function(ne,ae){for(var J;(J=f.inArray(ae,S,J))>-1;)S.splice(J,1),J<=O&&O--}),this},has:function(ne){return ne?f.inArray(ne,S)>-1:S.length>0},empty:function(){return S&&(S=[]),this},disable:function(){return M=b=[],S=d="",this},disabled:function(){return!S},lock:function(){return M=b=[],!d&&!c&&(S=d=""),this},locked:function(){return!!M},fireWith:function(ne,ae){return M||(ae=ae||[],ae=[ne,ae.slice?ae.slice():ae],b.push(ae),c||N()),this},fire:function(){return z.fireWith(this,arguments),this},fired:function(){return!!g}};return z};function It(o){return o}function ht(o){throw o}function F(o,c,d,g){var M;try{o&&E(M=o.promise)?M.call(o).done(c).fail(d):o&&E(M=o.then)?M.call(o,c,d):c.apply(void 0,[o].slice(g))}catch(S){d.apply(void 0,[S])}}f.extend({Deferred:function(o){var c=[["notify","progress",f.Callbacks("memory"),f.Callbacks("memory"),2],["resolve","done",f.Callbacks("once memory"),f.Callbacks("once memory"),0,"resolved"],["reject","fail",f.Callbacks("once memory"),f.Callbacks("once memory"),1,"rejected"]],d="pending",g={state:function(){return d},always:function(){return M.done(arguments).fail(arguments),this},catch:function(S){return g.then(null,S)},pipe:function(){var S=arguments;return f.Deferred(function(b){f.each(c,function(O,N){var z=E(S[N[4]])&&S[N[4]];M[N[1]](function(){var ne=z&&z.apply(this,arguments);ne&&E(ne.promise)?ne.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[N[0]+"With"](this,z?[ne]:arguments)})}),S=null}).promise()},then:function(S,b,O){var N=0;function z(ne,ae,J,ge){return function(){var tt=this,At=arguments,ct=function(){var Jt,Zn;if(!(ne<N)){if(Jt=J.apply(tt,At),Jt===ae.promise())throw new TypeError("Thenable self-resolution");Zn=Jt&&(typeof Jt=="object"||typeof Jt=="function")&&Jt.then,E(Zn)?ge?Zn.call(Jt,z(N,ae,It,ge),z(N,ae,ht,ge)):(N++,Zn.call(Jt,z(N,ae,It,ge),z(N,ae,ht,ge),z(N,ae,It,ae.notifyWith))):(J!==It&&(tt=void 0,At=[Jt]),(ge||ae.resolveWith)(tt,At))}},ln=ge?ct:function(){try{ct()}catch(Jt){f.Deferred.exceptionHook&&f.Deferred.exceptionHook(Jt,ln.error),ne+1>=N&&(J!==ht&&(tt=void 0,At=[Jt]),ae.rejectWith(tt,At))}};ne?ln():(f.Deferred.getErrorHook?ln.error=f.Deferred.getErrorHook():f.Deferred.getStackHook&&(ln.error=f.Deferred.getStackHook()),e.setTimeout(ln))}}return f.Deferred(function(ne){c[0][3].add(z(0,ne,E(O)?O:It,ne.notifyWith)),c[1][3].add(z(0,ne,E(S)?S:It)),c[2][3].add(z(0,ne,E(b)?b:ht))}).promise()},promise:function(S){return S!=null?f.extend(S,g):g}},M={};return f.each(c,function(S,b){var O=b[2],N=b[5];g[b[1]]=O.add,N&&O.add(function(){d=N},c[3-S][2].disable,c[3-S][3].disable,c[0][2].lock,c[0][3].lock),O.add(b[3].fire),M[b[0]]=function(){return M[b[0]+"With"](this===M?void 0:this,arguments),this},M[b[0]+"With"]=O.fireWith}),g.promise(M),o&&o.call(M,M),M},when:function(o){var c=arguments.length,d=c,g=Array(d),M=s.call(arguments),S=f.Deferred(),b=function(O){return function(N){g[O]=this,M[O]=arguments.length>1?s.call(arguments):N,--c||S.resolveWith(g,M)}};if(c<=1&&(F(o,S.done(b(d)).resolve,S.reject,!c),S.state()==="pending"||E(M[d]&&M[d].then)))return S.then();for(;d--;)F(M[d],b(d),S.reject);return S.promise()}});var Mn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;f.Deferred.exceptionHook=function(o,c){e.console&&e.console.warn&&o&&Mn.test(o.name)&&e.console.warn("jQuery.Deferred exception: "+o.message,o.stack,c)},f.readyException=function(o){e.setTimeout(function(){throw o})};var mt=f.Deferred();f.fn.ready=function(o){return mt.then(o).catch(function(c){f.readyException(c)}),this},f.extend({isReady:!1,readyWait:1,ready:function(o){(o===!0?--f.readyWait:f.isReady)||(f.isReady=!0,!(o!==!0&&--f.readyWait>0)&&mt.resolveWith(x,[f]))}}),f.ready.then=mt.then;function ft(){x.removeEventListener("DOMContentLoaded",ft),e.removeEventListener("load",ft),f.ready()}x.readyState==="complete"||x.readyState!=="loading"&&!x.documentElement.doScroll?e.setTimeout(f.ready):(x.addEventListener("DOMContentLoaded",ft),e.addEventListener("load",ft));var Oe=function(o,c,d,g,M,S,b){var O=0,N=o.length,z=d==null;if(P(d)==="object"){M=!0;for(O in d)Oe(o,c,O,d[O],!0,S,b)}else if(g!==void 0&&(M=!0,E(g)||(b=!0),z&&(b?(c.call(o,g),c=null):(z=c,c=function(ne,ae,J){return z.call(f(ne),J)})),c))for(;O<N;O++)c(o[O],d,b?g:g.call(o[O],O,c(o[O],d)));return M?o:z?c.call(o):N?c(o[0],d):S},Ht=/^-ms-/,Ge=/-([a-z])/g;function D(o,c){return c.toUpperCase()}function A(o){return o.replace(Ht,"ms-").replace(Ge,D)}var $=function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType};function le(){this.expando=f.expando+le.uid++}le.uid=1,le.prototype={cache:function(o){var c=o[this.expando];return c||(c={},$(o)&&(o.nodeType?o[this.expando]=c:Object.defineProperty(o,this.expando,{value:c,configurable:!0}))),c},set:function(o,c,d){var g,M=this.cache(o);if(typeof c=="string")M[A(c)]=d;else for(g in c)M[A(g)]=c[g];return M},get:function(o,c){return c===void 0?this.cache(o):o[this.expando]&&o[this.expando][A(c)]},access:function(o,c,d){return c===void 0||c&&typeof c=="string"&&d===void 0?this.get(o,c):(this.set(o,c,d),d!==void 0?d:c)},remove:function(o,c){var d,g=o[this.expando];if(g!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(A):(c=A(c),c=c in g?[c]:c.match(He)||[]),d=c.length;d--;)delete g[c[d]];(c===void 0||f.isEmptyObject(g))&&(o.nodeType?o[this.expando]=void 0:delete o[this.expando])}},hasData:function(o){var c=o[this.expando];return c!==void 0&&!f.isEmptyObject(c)}};var Z=new le,re=new le,ke=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ae=/[A-Z]/g;function $e(o){return o==="true"?!0:o==="false"?!1:o==="null"?null:o===+o+""?+o:ke.test(o)?JSON.parse(o):o}function Ze(o,c,d){var g;if(d===void 0&&o.nodeType===1)if(g="data-"+c.replace(Ae,"-$&").toLowerCase(),d=o.getAttribute(g),typeof d=="string"){try{d=$e(d)}catch{}re.set(o,c,d)}else d=void 0;return d}f.extend({hasData:function(o){return re.hasData(o)||Z.hasData(o)},data:function(o,c,d){return re.access(o,c,d)},removeData:function(o,c){re.remove(o,c)},_data:function(o,c,d){return Z.access(o,c,d)},_removeData:function(o,c){Z.remove(o,c)}}),f.fn.extend({data:function(o,c){var d,g,M,S=this[0],b=S&&S.attributes;if(o===void 0){if(this.length&&(M=re.get(S),S.nodeType===1&&!Z.get(S,"hasDataAttrs"))){for(d=b.length;d--;)b[d]&&(g=b[d].name,g.indexOf("data-")===0&&(g=A(g.slice(5)),Ze(S,g,M[g])));Z.set(S,"hasDataAttrs",!0)}return M}return typeof o=="object"?this.each(function(){re.set(this,o)}):Oe(this,function(O){var N;if(S&&O===void 0)return N=re.get(S,o),N!==void 0||(N=Ze(S,o),N!==void 0)?N:void 0;this.each(function(){re.set(this,o,O)})},null,c,arguments.length>1,null,!0)},removeData:function(o){return this.each(function(){re.remove(this,o)})}}),f.extend({queue:function(o,c,d){var g;if(o)return c=(c||"fx")+"queue",g=Z.get(o,c),d&&(!g||Array.isArray(d)?g=Z.access(o,c,f.makeArray(d)):g.push(d)),g||[]},dequeue:function(o,c){c=c||"fx";var d=f.queue(o,c),g=d.length,M=d.shift(),S=f._queueHooks(o,c),b=function(){f.dequeue(o,c)};M==="inprogress"&&(M=d.shift(),g--),M&&(c==="fx"&&d.unshift("inprogress"),delete S.stop,M.call(o,b,S)),!g&&S&&S.empty.fire()},_queueHooks:function(o,c){var d=c+"queueHooks";return Z.get(o,d)||Z.access(o,d,{empty:f.Callbacks("once memory").add(function(){Z.remove(o,[c+"queue",d])})})}}),f.fn.extend({queue:function(o,c){var d=2;return typeof o!="string"&&(c=o,o="fx",d--),arguments.length<d?f.queue(this[0],o):c===void 0?this:this.each(function(){var g=f.queue(this,o,c);f._queueHooks(this,o),o==="fx"&&g[0]!=="inprogress"&&f.dequeue(this,o)})},dequeue:function(o){return this.each(function(){f.dequeue(this,o)})},clearQueue:function(o){return this.queue(o||"fx",[])},promise:function(o,c){var d,g=1,M=f.Deferred(),S=this,b=this.length,O=function(){--g||M.resolveWith(S,[S])};for(typeof o!="string"&&(c=o,o=void 0),o=o||"fx";b--;)d=Z.get(S[b],o+"queueHooks"),d&&d.empty&&(g++,d.empty.add(O));return O(),M.promise(c)}});var _e=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,De=new RegExp("^(?:([+-])=|)("+_e+")([a-z%]*)$","i"),ze=["Top","Right","Bottom","Left"],je=x.documentElement,Le=function(o){return f.contains(o.ownerDocument,o)},Mt={composed:!0};je.getRootNode&&(Le=function(o){return f.contains(o.ownerDocument,o)||o.getRootNode(Mt)===o.ownerDocument});var nt=function(o,c){return o=c||o,o.style.display==="none"||o.style.display===""&&Le(o)&&f.css(o,"display")==="none"};function Nt(o,c,d,g){var M,S,b=20,O=g?function(){return g.cur()}:function(){return f.css(o,c,"")},N=O(),z=d&&d[3]||(f.cssNumber[c]?"":"px"),ne=o.nodeType&&(f.cssNumber[c]||z!=="px"&&+N)&&De.exec(f.css(o,c));if(ne&&ne[3]!==z){for(N=N/2,z=z||ne[3],ne=+N||1;b--;)f.style(o,c,ne+z),(1-S)*(1-(S=O()/N||.5))<=0&&(b=0),ne=ne/S;ne=ne*2,f.style(o,c,ne+z),d=d||[]}return d&&(ne=+ne||+N||0,M=d[1]?ne+(d[1]+1)*d[2]:+d[2],g&&(g.unit=z,g.start=ne,g.end=M)),M}var V={};function we(o){var c,d=o.ownerDocument,g=o.nodeName,M=V[g];return M||(c=d.body.appendChild(d.createElement(g)),M=f.css(c,"display"),c.parentNode.removeChild(c),M==="none"&&(M="block"),V[g]=M,M)}function ie(o,c){for(var d,g,M=[],S=0,b=o.length;S<b;S++)g=o[S],g.style&&(d=g.style.display,c?(d==="none"&&(M[S]=Z.get(g,"display")||null,M[S]||(g.style.display="")),g.style.display===""&&nt(g)&&(M[S]=we(g))):d!=="none"&&(M[S]="none",Z.set(g,"display",d)));for(S=0;S<b;S++)M[S]!=null&&(o[S].style.display=M[S]);return o}f.fn.extend({show:function(){return ie(this,!0)},hide:function(){return ie(this)},toggle:function(o){return typeof o=="boolean"?o?this.show():this.hide():this.each(function(){nt(this)?f(this).show():f(this).hide()})}});var he=/^(?:checkbox|radio)$/i,Re=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ee=/^$|^module$|\/(?:java|ecma)script/i;(function(){var o=x.createDocumentFragment(),c=o.appendChild(x.createElement("div")),d=x.createElement("input");d.setAttribute("type","radio"),d.setAttribute("checked","checked"),d.setAttribute("name","t"),c.appendChild(d),T.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",T.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",T.option=!!c.lastChild})();var qe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};qe.tbody=qe.tfoot=qe.colgroup=qe.caption=qe.thead,qe.th=qe.td,T.option||(qe.optgroup=qe.option=[1,"<select multiple='multiple'>","</select>"]);function gt(o,c){var d;return typeof o.getElementsByTagName<"u"?d=o.getElementsByTagName(c||"*"):typeof o.querySelectorAll<"u"?d=o.querySelectorAll(c||"*"):d=[],c===void 0||c&&C(o,c)?f.merge([o],d):d}function Yt(o,c){for(var d=0,g=o.length;d<g;d++)Z.set(o[d],"globalEval",!c||Z.get(c[d],"globalEval"))}var Lt=/<|&#?\w+;/;function Sn(o,c,d,g,M){for(var S,b,O,N,z,ne,ae=c.createDocumentFragment(),J=[],ge=0,tt=o.length;ge<tt;ge++)if(S=o[ge],S||S===0)if(P(S)==="object")f.merge(J,S.nodeType?[S]:S);else if(!Lt.test(S))J.push(c.createTextNode(S));else{for(b=b||ae.appendChild(c.createElement("div")),O=(Re.exec(S)||["",""])[1].toLowerCase(),N=qe[O]||qe._default,b.innerHTML=N[1]+f.htmlPrefilter(S)+N[2],ne=N[0];ne--;)b=b.lastChild;f.merge(J,b.childNodes),b=ae.firstChild,b.textContent=""}for(ae.textContent="",ge=0;S=J[ge++];){if(g&&f.inArray(S,g)>-1){M&&M.push(S);continue}if(z=Le(S),b=gt(ae.appendChild(S),"script"),z&&Yt(b),d)for(ne=0;S=b[ne++];)Ee.test(S.type||"")&&d.push(S)}return ae}var Ln=/^([^.]*)(?:\.(.+)|)/;function hi(){return!0}function fi(){return!1}function Bn(o,c,d,g,M,S){var b,O;if(typeof c=="object"){typeof d!="string"&&(g=g||d,d=void 0);for(O in c)Bn(o,O,d,g,c[O],S);return o}if(g==null&&M==null?(M=d,g=d=void 0):M==null&&(typeof d=="string"?(M=g,g=void 0):(M=g,g=d,d=void 0)),M===!1)M=fi;else if(!M)return o;return S===1&&(b=M,M=function(N){return f().off(N),b.apply(this,arguments)},M.guid=b.guid||(b.guid=f.guid++)),o.each(function(){f.event.add(this,c,M,g,d)})}f.event={global:{},add:function(o,c,d,g,M){var S,b,O,N,z,ne,ae,J,ge,tt,At,ct=Z.get(o);if($(o))for(d.handler&&(S=d,d=S.handler,M=S.selector),M&&f.find.matchesSelector(je,M),d.guid||(d.guid=f.guid++),(N=ct.events)||(N=ct.events=Object.create(null)),(b=ct.handle)||(b=ct.handle=function(ln){return typeof f<"u"&&f.event.triggered!==ln.type?f.event.dispatch.apply(o,arguments):void 0}),c=(c||"").match(He)||[""],z=c.length;z--;)O=Ln.exec(c[z])||[],ge=At=O[1],tt=(O[2]||"").split(".").sort(),ge&&(ae=f.event.special[ge]||{},ge=(M?ae.delegateType:ae.bindType)||ge,ae=f.event.special[ge]||{},ne=f.extend({type:ge,origType:At,data:g,handler:d,guid:d.guid,selector:M,needsContext:M&&f.expr.match.needsContext.test(M),namespace:tt.join(".")},S),(J=N[ge])||(J=N[ge]=[],J.delegateCount=0,(!ae.setup||ae.setup.call(o,g,tt,b)===!1)&&o.addEventListener&&o.addEventListener(ge,b)),ae.add&&(ae.add.call(o,ne),ne.handler.guid||(ne.handler.guid=d.guid)),M?J.splice(J.delegateCount++,0,ne):J.push(ne),f.event.global[ge]=!0)},remove:function(o,c,d,g,M){var S,b,O,N,z,ne,ae,J,ge,tt,At,ct=Z.hasData(o)&&Z.get(o);if(!(!ct||!(N=ct.events))){for(c=(c||"").match(He)||[""],z=c.length;z--;){if(O=Ln.exec(c[z])||[],ge=At=O[1],tt=(O[2]||"").split(".").sort(),!ge){for(ge in N)f.event.remove(o,ge+c[z],d,g,!0);continue}for(ae=f.event.special[ge]||{},ge=(g?ae.delegateType:ae.bindType)||ge,J=N[ge]||[],O=O[2]&&new RegExp("(^|\\.)"+tt.join("\\.(?:.*\\.|)")+"(\\.|$)"),b=S=J.length;S--;)ne=J[S],(M||At===ne.origType)&&(!d||d.guid===ne.guid)&&(!O||O.test(ne.namespace))&&(!g||g===ne.selector||g==="**"&&ne.selector)&&(J.splice(S,1),ne.selector&&J.delegateCount--,ae.remove&&ae.remove.call(o,ne));b&&!J.length&&((!ae.teardown||ae.teardown.call(o,tt,ct.handle)===!1)&&f.removeEvent(o,ge,ct.handle),delete N[ge])}f.isEmptyObject(N)&&Z.remove(o,"handle events")}},dispatch:function(o){var c,d,g,M,S,b,O=new Array(arguments.length),N=f.event.fix(o),z=(Z.get(this,"events")||Object.create(null))[N.type]||[],ne=f.event.special[N.type]||{};for(O[0]=N,c=1;c<arguments.length;c++)O[c]=arguments[c];if(N.delegateTarget=this,!(ne.preDispatch&&ne.preDispatch.call(this,N)===!1)){for(b=f.event.handlers.call(this,N,z),c=0;(M=b[c++])&&!N.isPropagationStopped();)for(N.currentTarget=M.elem,d=0;(S=M.handlers[d++])&&!N.isImmediatePropagationStopped();)(!N.rnamespace||S.namespace===!1||N.rnamespace.test(S.namespace))&&(N.handleObj=S,N.data=S.data,g=((f.event.special[S.origType]||{}).handle||S.handler).apply(M.elem,O),g!==void 0&&(N.result=g)===!1&&(N.preventDefault(),N.stopPropagation()));return ne.postDispatch&&ne.postDispatch.call(this,N),N.result}},handlers:function(o,c){var d,g,M,S,b,O=[],N=c.delegateCount,z=o.target;if(N&&z.nodeType&&!(o.type==="click"&&o.button>=1)){for(;z!==this;z=z.parentNode||this)if(z.nodeType===1&&!(o.type==="click"&&z.disabled===!0)){for(S=[],b={},d=0;d<N;d++)g=c[d],M=g.selector+" ",b[M]===void 0&&(b[M]=g.needsContext?f(M,this).index(z)>-1:f.find(M,this,null,[z]).length),b[M]&&S.push(g);S.length&&O.push({elem:z,handlers:S})}}return z=this,N<c.length&&O.push({elem:z,handlers:c.slice(N)}),O},addProp:function(o,c){Object.defineProperty(f.Event.prototype,o,{enumerable:!0,configurable:!0,get:E(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[o]},set:function(d){Object.defineProperty(this,o,{enumerable:!0,configurable:!0,writable:!0,value:d})}})},fix:function(o){return o[f.expando]?o:new f.Event(o)},special:{load:{noBubble:!0},click:{setup:function(o){var c=this||o;return he.test(c.type)&&c.click&&C(c,"input")&&Ii(c,"click",!0),!1},trigger:function(o){var c=this||o;return he.test(c.type)&&c.click&&C(c,"input")&&Ii(c,"click"),!0},_default:function(o){var c=o.target;return he.test(c.type)&&c.click&&C(c,"input")&&Z.get(c,"click")||C(c,"a")}},beforeunload:{postDispatch:function(o){o.result!==void 0&&o.originalEvent&&(o.originalEvent.returnValue=o.result)}}}};function Ii(o,c,d){if(!d){Z.get(o,c)===void 0&&f.event.add(o,c,hi);return}Z.set(o,c,!1),f.event.add(o,c,{namespace:!1,handler:function(g){var M,S=Z.get(this,c);if(g.isTrigger&1&&this[c]){if(S)(f.event.special[c]||{}).delegateType&&g.stopPropagation();else if(S=s.call(arguments),Z.set(this,c,S),this[c](),M=Z.get(this,c),Z.set(this,c,!1),S!==M)return g.stopImmediatePropagation(),g.preventDefault(),M}else S&&(Z.set(this,c,f.event.trigger(S[0],S.slice(1),this)),g.stopPropagation(),g.isImmediatePropagationStopped=hi)}})}f.removeEvent=function(o,c,d){o.removeEventListener&&o.removeEventListener(c,d)},f.Event=function(o,c){if(!(this instanceof f.Event))return new f.Event(o,c);o&&o.type?(this.originalEvent=o,this.type=o.type,this.isDefaultPrevented=o.defaultPrevented||o.defaultPrevented===void 0&&o.returnValue===!1?hi:fi,this.target=o.target&&o.target.nodeType===3?o.target.parentNode:o.target,this.currentTarget=o.currentTarget,this.relatedTarget=o.relatedTarget):this.type=o,c&&f.extend(this,c),this.timeStamp=o&&o.timeStamp||Date.now(),this[f.expando]=!0},f.Event.prototype={constructor:f.Event,isDefaultPrevented:fi,isPropagationStopped:fi,isImmediatePropagationStopped:fi,isSimulated:!1,preventDefault:function(){var o=this.originalEvent;this.isDefaultPrevented=hi,o&&!this.isSimulated&&o.preventDefault()},stopPropagation:function(){var o=this.originalEvent;this.isPropagationStopped=hi,o&&!this.isSimulated&&o.stopPropagation()},stopImmediatePropagation:function(){var o=this.originalEvent;this.isImmediatePropagationStopped=hi,o&&!this.isSimulated&&o.stopImmediatePropagation(),this.stopPropagation()}},f.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},f.event.addProp),f.each({focus:"focusin",blur:"focusout"},function(o,c){function d(g){if(x.documentMode){var M=Z.get(this,"handle"),S=f.event.fix(g);S.type=g.type==="focusin"?"focus":"blur",S.isSimulated=!0,M(g),S.target===S.currentTarget&&M(S)}else f.event.simulate(c,g.target,f.event.fix(g))}f.event.special[o]={setup:function(){var g;if(Ii(this,o,!0),x.documentMode)g=Z.get(this,c),g||this.addEventListener(c,d),Z.set(this,c,(g||0)+1);else return!1},trigger:function(){return Ii(this,o),!0},teardown:function(){var g;if(x.documentMode)g=Z.get(this,c)-1,g?Z.set(this,c,g):(this.removeEventListener(c,d),Z.remove(this,c));else return!1},_default:function(g){return Z.get(g.target,o)},delegateType:c},f.event.special[c]={setup:function(){var g=this.ownerDocument||this.document||this,M=x.documentMode?this:g,S=Z.get(M,c);S||(x.documentMode?this.addEventListener(c,d):g.addEventListener(o,d,!0)),Z.set(M,c,(S||0)+1)},teardown:function(){var g=this.ownerDocument||this.document||this,M=x.documentMode?this:g,S=Z.get(M,c)-1;S?Z.set(M,c,S):(x.documentMode?this.removeEventListener(c,d):g.removeEventListener(o,d,!0),Z.remove(M,c))}}}),f.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(o,c){f.event.special[o]={delegateType:c,bindType:c,handle:function(d){var g,M=this,S=d.relatedTarget,b=d.handleObj;return(!S||S!==M&&!f.contains(M,S))&&(d.type=b.origType,g=b.handler.apply(this,arguments),d.type=c),g}}}),f.fn.extend({on:function(o,c,d,g){return Bn(this,o,c,d,g)},one:function(o,c,d,g){return Bn(this,o,c,d,g,1)},off:function(o,c,d){var g,M;if(o&&o.preventDefault&&o.handleObj)return g=o.handleObj,f(o.delegateTarget).off(g.namespace?g.origType+"."+g.namespace:g.origType,g.selector,g.handler),this;if(typeof o=="object"){for(M in o)this.off(M,c,o[M]);return this}return(c===!1||typeof c=="function")&&(d=c,c=void 0),d===!1&&(d=fi),this.each(function(){f.event.remove(this,o,d,c)})}});var Ws=/<script|<style|<link/i,Xs=/checked\s*(?:[^=]|=\s*.checked.)/i,Mr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ls(o,c){return C(o,"table")&&C(c.nodeType!==11?c:c.firstChild,"tr")&&f(o).children("tbody")[0]||o}function Sr(o){return o.type=(o.getAttribute("type")!==null)+"/"+o.type,o}function qs(o){return(o.type||"").slice(0,5)==="true/"?o.type=o.type.slice(5):o.removeAttribute("type"),o}function cs(o,c){var d,g,M,S,b,O,N;if(c.nodeType===1){if(Z.hasData(o)&&(S=Z.get(o),N=S.events,N)){Z.remove(c,"handle events");for(M in N)for(d=0,g=N[M].length;d<g;d++)f.event.add(c,M,N[M][d])}re.hasData(o)&&(b=re.access(o),O=f.extend({},b),re.set(c,O))}}function jo(o,c){var d=c.nodeName.toLowerCase();d==="input"&&he.test(o.type)?c.checked=o.checked:(d==="input"||d==="textarea")&&(c.defaultValue=o.defaultValue)}function Ni(o,c,d,g){c=a(c);var M,S,b,O,N,z,ne=0,ae=o.length,J=ae-1,ge=c[0],tt=E(ge);if(tt||ae>1&&typeof ge=="string"&&!T.checkClone&&Xs.test(ge))return o.each(function(At){var ct=o.eq(At);tt&&(c[0]=ge.call(this,At,ct.html())),Ni(ct,c,d,g)});if(ae&&(M=Sn(c,o[0].ownerDocument,!1,o,g),S=M.firstChild,M.childNodes.length===1&&(M=S),S||g)){for(b=f.map(gt(M,"script"),Sr),O=b.length;ne<ae;ne++)N=M,ne!==J&&(N=f.clone(N,!0,!0),O&&f.merge(b,gt(N,"script"))),d.call(o[ne],N,ne);if(O)for(z=b[b.length-1].ownerDocument,f.map(b,qs),ne=0;ne<O;ne++)N=b[ne],Ee.test(N.type||"")&&!Z.access(N,"globalEval")&&f.contains(z,N)&&(N.src&&(N.type||"").toLowerCase()!=="module"?f._evalUrl&&!N.noModule&&f._evalUrl(N.src,{nonce:N.nonce||N.getAttribute("nonce")},z):I(N.textContent.replace(Mr,""),N,z))}return o}function js(o,c,d){for(var g,M=c?f.filter(c,o):o,S=0;(g=M[S])!=null;S++)!d&&g.nodeType===1&&f.cleanData(gt(g)),g.parentNode&&(d&&Le(g)&&Yt(gt(g,"script")),g.parentNode.removeChild(g));return o}f.extend({htmlPrefilter:function(o){return o},clone:function(o,c,d){var g,M,S,b,O=o.cloneNode(!0),N=Le(o);if(!T.noCloneChecked&&(o.nodeType===1||o.nodeType===11)&&!f.isXMLDoc(o))for(b=gt(O),S=gt(o),g=0,M=S.length;g<M;g++)jo(S[g],b[g]);if(c)if(d)for(S=S||gt(o),b=b||gt(O),g=0,M=S.length;g<M;g++)cs(S[g],b[g]);else cs(o,O);return b=gt(O,"script"),b.length>0&&Yt(b,!N&&gt(o,"script")),O},cleanData:function(o){for(var c,d,g,M=f.event.special,S=0;(d=o[S])!==void 0;S++)if($(d)){if(c=d[Z.expando]){if(c.events)for(g in c.events)M[g]?f.event.remove(d,g):f.removeEvent(d,g,c.handle);d[Z.expando]=void 0}d[re.expando]&&(d[re.expando]=void 0)}}}),f.fn.extend({detach:function(o){return js(this,o,!0)},remove:function(o){return js(this,o)},text:function(o){return Oe(this,function(c){return c===void 0?f.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,o,arguments.length)},append:function(){return Ni(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=ls(this,o);c.appendChild(o)}})},prepend:function(){return Ni(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=ls(this,o);c.insertBefore(o,c.firstChild)}})},before:function(){return Ni(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this)})},after:function(){return Ni(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling)})},empty:function(){for(var o,c=0;(o=this[c])!=null;c++)o.nodeType===1&&(f.cleanData(gt(o,!1)),o.textContent="");return this},clone:function(o,c){return o=o??!1,c=c??o,this.map(function(){return f.clone(this,o,c)})},html:function(o){return Oe(this,function(c){var d=this[0]||{},g=0,M=this.length;if(c===void 0&&d.nodeType===1)return d.innerHTML;if(typeof c=="string"&&!Ws.test(c)&&!qe[(Re.exec(c)||["",""])[1].toLowerCase()]){c=f.htmlPrefilter(c);try{for(;g<M;g++)d=this[g]||{},d.nodeType===1&&(f.cleanData(gt(d,!1)),d.innerHTML=c);d=0}catch{}}d&&this.empty().append(c)},null,o,arguments.length)},replaceWith:function(){var o=[];return Ni(this,arguments,function(c){var d=this.parentNode;f.inArray(this,o)<0&&(f.cleanData(gt(this)),d&&d.replaceChild(c,this))},o)}}),f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(o,c){f.fn[o]=function(d){for(var g,M=[],S=f(d),b=S.length-1,O=0;O<=b;O++)g=O===b?this:this.clone(!0),f(S[O])[c](g),l.apply(M,g.get());return this.pushStack(M)}});var us=new RegExp("^("+_e+")(?!px)[a-z%]+$","i"),hs=/^--/,Tr=function(o){var c=o.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(o)},w=function(o,c,d){var g,M,S={};for(M in c)S[M]=o.style[M],o.style[M]=c[M];g=d.call(o);for(M in c)o.style[M]=S[M];return g},X=new RegExp(ze.join("|"),"i");(function(){function o(){if(z){N.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",z.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",je.appendChild(N).appendChild(z);var ne=e.getComputedStyle(z);d=ne.top!=="1%",O=c(ne.marginLeft)===12,z.style.right="60%",S=c(ne.right)===36,g=c(ne.width)===36,z.style.position="absolute",M=c(z.offsetWidth/3)===12,je.removeChild(N),z=null}}function c(ne){return Math.round(parseFloat(ne))}var d,g,M,S,b,O,N=x.createElement("div"),z=x.createElement("div");z.style&&(z.style.backgroundClip="content-box",z.cloneNode(!0).style.backgroundClip="",T.clearCloneStyle=z.style.backgroundClip==="content-box",f.extend(T,{boxSizingReliable:function(){return o(),g},pixelBoxStyles:function(){return o(),S},pixelPosition:function(){return o(),d},reliableMarginLeft:function(){return o(),O},scrollboxSize:function(){return o(),M},reliableTrDimensions:function(){var ne,ae,J,ge;return b==null&&(ne=x.createElement("table"),ae=x.createElement("tr"),J=x.createElement("div"),ne.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ae.style.cssText="box-sizing:content-box;border:1px solid",ae.style.height="1px",J.style.height="9px",J.style.display="block",je.appendChild(ne).appendChild(ae).appendChild(J),ge=e.getComputedStyle(ae),b=parseInt(ge.height,10)+parseInt(ge.borderTopWidth,10)+parseInt(ge.borderBottomWidth,10)===ae.offsetHeight,je.removeChild(ne)),b}}))})();function Q(o,c,d){var g,M,S,b,O=hs.test(c),N=o.style;return d=d||Tr(o),d&&(b=d.getPropertyValue(c)||d[c],O&&b&&(b=b.replace(de,"$1")||void 0),b===""&&!Le(o)&&(b=f.style(o,c)),!T.pixelBoxStyles()&&us.test(b)&&X.test(c)&&(g=N.width,M=N.minWidth,S=N.maxWidth,N.minWidth=N.maxWidth=N.width=b,b=d.width,N.width=g,N.minWidth=M,N.maxWidth=S)),b!==void 0?b+"":b}function ee(o,c){return{get:function(){if(o()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var q=["Webkit","Moz","ms"],xe=x.createElement("div").style,Se={};function Ne(o){for(var c=o[0].toUpperCase()+o.slice(1),d=q.length;d--;)if(o=q[d]+c,o in xe)return o}function Ue(o){var c=f.cssProps[o]||Se[o];return c||(o in xe?o:Se[o]=Ne(o)||o)}var et=/^(none|table(?!-c[ea]).+)/,Je={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"};function St(o,c,d){var g=De.exec(c);return g?Math.max(0,g[2]-(d||0))+(g[3]||"px"):c}function bt(o,c,d,g,M,S){var b=c==="width"?1:0,O=0,N=0,z=0;if(d===(g?"border":"content"))return 0;for(;b<4;b+=2)d==="margin"&&(z+=f.css(o,d+ze[b],!0,M)),g?(d==="content"&&(N-=f.css(o,"padding"+ze[b],!0,M)),d!=="margin"&&(N-=f.css(o,"border"+ze[b]+"Width",!0,M))):(N+=f.css(o,"padding"+ze[b],!0,M),d!=="padding"?N+=f.css(o,"border"+ze[b]+"Width",!0,M):O+=f.css(o,"border"+ze[b]+"Width",!0,M));return!g&&S>=0&&(N+=Math.max(0,Math.ceil(o["offset"+c[0].toUpperCase()+c.slice(1)]-S-N-O-.5))||0),N+z}function qt(o,c,d){var g=Tr(o),M=!T.boxSizingReliable()||d,S=M&&f.css(o,"boxSizing",!1,g)==="border-box",b=S,O=Q(o,c,g),N="offset"+c[0].toUpperCase()+c.slice(1);if(us.test(O)){if(!d)return O;O="auto"}return(!T.boxSizingReliable()&&S||!T.reliableTrDimensions()&&C(o,"tr")||O==="auto"||!parseFloat(O)&&f.css(o,"display",!1,g)==="inline")&&o.getClientRects().length&&(S=f.css(o,"boxSizing",!1,g)==="border-box",b=N in o,b&&(O=o[N])),O=parseFloat(O)||0,O+bt(o,c,d||(S?"border":"content"),b,g,O)+"px"}f.extend({cssHooks:{opacity:{get:function(o,c){if(c){var d=Q(o,"opacity");return d===""?"1":d}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(o,c,d,g){if(!(!o||o.nodeType===3||o.nodeType===8||!o.style)){var M,S,b,O=A(c),N=hs.test(c),z=o.style;if(N||(c=Ue(O)),b=f.cssHooks[c]||f.cssHooks[O],d!==void 0){if(S=typeof d,S==="string"&&(M=De.exec(d))&&M[1]&&(d=Nt(o,c,M),S="number"),d==null||d!==d)return;S==="number"&&!N&&(d+=M&&M[3]||(f.cssNumber[O]?"":"px")),!T.clearCloneStyle&&d===""&&c.indexOf("background")===0&&(z[c]="inherit"),(!b||!("set"in b)||(d=b.set(o,d,g))!==void 0)&&(N?z.setProperty(c,d):z[c]=d)}else return b&&"get"in b&&(M=b.get(o,!1,g))!==void 0?M:z[c]}},css:function(o,c,d,g){var M,S,b,O=A(c),N=hs.test(c);return N||(c=Ue(O)),b=f.cssHooks[c]||f.cssHooks[O],b&&"get"in b&&(M=b.get(o,!0,d)),M===void 0&&(M=Q(o,c,g)),M==="normal"&&c in Xe&&(M=Xe[c]),d===""||d?(S=parseFloat(M),d===!0||isFinite(S)?S||0:M):M}}),f.each(["height","width"],function(o,c){f.cssHooks[c]={get:function(d,g,M){if(g)return et.test(f.css(d,"display"))&&(!d.getClientRects().length||!d.getBoundingClientRect().width)?w(d,Je,function(){return qt(d,c,M)}):qt(d,c,M)},set:function(d,g,M){var S,b=Tr(d),O=!T.scrollboxSize()&&b.position==="absolute",N=O||M,z=N&&f.css(d,"boxSizing",!1,b)==="border-box",ne=M?bt(d,c,M,z,b):0;return z&&O&&(ne-=Math.ceil(d["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(b[c])-bt(d,c,"border",!1,b)-.5)),ne&&(S=De.exec(g))&&(S[3]||"px")!=="px"&&(d.style[c]=g,g=f.css(d,c)),St(d,g,ne)}}}),f.cssHooks.marginLeft=ee(T.reliableMarginLeft,function(o,c){if(c)return(parseFloat(Q(o,"marginLeft"))||o.getBoundingClientRect().left-w(o,{marginLeft:0},function(){return o.getBoundingClientRect().left}))+"px"}),f.each({margin:"",padding:"",border:"Width"},function(o,c){f.cssHooks[o+c]={expand:function(d){for(var g=0,M={},S=typeof d=="string"?d.split(" "):[d];g<4;g++)M[o+ze[g]+c]=S[g]||S[g-2]||S[0];return M}},o!=="margin"&&(f.cssHooks[o+c].set=St)}),f.fn.extend({css:function(o,c){return Oe(this,function(d,g,M){var S,b,O={},N=0;if(Array.isArray(g)){for(S=Tr(d),b=g.length;N<b;N++)O[g[N]]=f.css(d,g[N],!1,S);return O}return M!==void 0?f.style(d,g,M):f.css(d,g)},o,c,arguments.length>1)}});function _t(o,c,d,g,M){return new _t.prototype.init(o,c,d,g,M)}f.Tween=_t,_t.prototype={constructor:_t,init:function(o,c,d,g,M,S){this.elem=o,this.prop=d,this.easing=M||f.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=g,this.unit=S||(f.cssNumber[d]?"":"px")},cur:function(){var o=_t.propHooks[this.prop];return o&&o.get?o.get(this):_t.propHooks._default.get(this)},run:function(o){var c,d=_t.propHooks[this.prop];return this.options.duration?this.pos=c=f.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=c=o,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):_t.propHooks._default.set(this),this}},_t.prototype.init.prototype=_t.prototype,_t.propHooks={_default:{get:function(o){var c;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(c=f.css(o.elem,o.prop,""),!c||c==="auto"?0:c)},set:function(o){f.fx.step[o.prop]?f.fx.step[o.prop](o):o.elem.nodeType===1&&(f.cssHooks[o.prop]||o.elem.style[Ue(o.prop)]!=null)?f.style(o.elem,o.prop,o.now+o.unit):o.elem[o.prop]=o.now}}},_t.propHooks.scrollTop=_t.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},f.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},f.fx=_t.prototype.init,f.fx.step={};var dt,We,Zt=/^(?:toggle|show|hide)$/,Ct=/queueHooks$/;function fn(){We&&(x.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(fn):e.setTimeout(fn,f.fx.interval),f.fx.tick())}function di(){return e.setTimeout(function(){dt=void 0}),dt=Date.now()}function nn(o,c){var d,g=0,M={height:o};for(c=c?1:0;g<4;g+=2-c)d=ze[g],M["margin"+d]=M["padding"+d]=o;return c&&(M.opacity=M.width=o),M}function Ui(o,c,d){for(var g,M=(Wt.tweeners[c]||[]).concat(Wt.tweeners["*"]),S=0,b=M.length;S<b;S++)if(g=M[S].call(d,c,o))return g}function zt(o,c,d){var g,M,S,b,O,N,z,ne,ae="width"in c||"height"in c,J=this,ge={},tt=o.style,At=o.nodeType&&nt(o),ct=Z.get(o,"fxshow");d.queue||(b=f._queueHooks(o,"fx"),b.unqueued==null&&(b.unqueued=0,O=b.empty.fire,b.empty.fire=function(){b.unqueued||O()}),b.unqueued++,J.always(function(){J.always(function(){b.unqueued--,f.queue(o,"fx").length||b.empty.fire()})}));for(g in c)if(M=c[g],Zt.test(M)){if(delete c[g],S=S||M==="toggle",M===(At?"hide":"show"))if(M==="show"&&ct&&ct[g]!==void 0)At=!0;else continue;ge[g]=ct&&ct[g]||f.style(o,g)}if(N=!f.isEmptyObject(c),!(!N&&f.isEmptyObject(ge))){ae&&o.nodeType===1&&(d.overflow=[tt.overflow,tt.overflowX,tt.overflowY],z=ct&&ct.display,z==null&&(z=Z.get(o,"display")),ne=f.css(o,"display"),ne==="none"&&(z?ne=z:(ie([o],!0),z=o.style.display||z,ne=f.css(o,"display"),ie([o]))),(ne==="inline"||ne==="inline-block"&&z!=null)&&f.css(o,"float")==="none"&&(N||(J.done(function(){tt.display=z}),z==null&&(ne=tt.display,z=ne==="none"?"":ne)),tt.display="inline-block")),d.overflow&&(tt.overflow="hidden",J.always(function(){tt.overflow=d.overflow[0],tt.overflowX=d.overflow[1],tt.overflowY=d.overflow[2]})),N=!1;for(g in ge)N||(ct?"hidden"in ct&&(At=ct.hidden):ct=Z.access(o,"fxshow",{display:z}),S&&(ct.hidden=!At),At&&ie([o],!0),J.done(function(){At||ie([o]),Z.remove(o,"fxshow");for(g in ge)f.style(o,g,ge[g])})),N=Ui(At?ct[g]:0,g,J),g in ct||(ct[g]=N.start,At&&(N.end=N.start,N.start=0))}}function Tn(o,c){var d,g,M,S,b;for(d in o)if(g=A(d),M=c[g],S=o[d],Array.isArray(S)&&(M=S[1],S=o[d]=S[0]),d!==g&&(o[g]=S,delete o[d]),b=f.cssHooks[g],b&&"expand"in b){S=b.expand(S),delete o[g];for(d in S)d in o||(o[d]=S[d],c[d]=M)}else c[g]=M}function Wt(o,c,d){var g,M,S=0,b=Wt.prefilters.length,O=f.Deferred().always(function(){delete N.elem}),N=function(){if(M)return!1;for(var ae=dt||di(),J=Math.max(0,z.startTime+z.duration-ae),ge=J/z.duration||0,tt=1-ge,At=0,ct=z.tweens.length;At<ct;At++)z.tweens[At].run(tt);return O.notifyWith(o,[z,tt,J]),tt<1&&ct?J:(ct||O.notifyWith(o,[z,1,0]),O.resolveWith(o,[z]),!1)},z=O.promise({elem:o,props:f.extend({},c),opts:f.extend(!0,{specialEasing:{},easing:f.easing._default},d),originalProperties:c,originalOptions:d,startTime:dt||di(),duration:d.duration,tweens:[],createTween:function(ae,J){var ge=f.Tween(o,z.opts,ae,J,z.opts.specialEasing[ae]||z.opts.easing);return z.tweens.push(ge),ge},stop:function(ae){var J=0,ge=ae?z.tweens.length:0;if(M)return this;for(M=!0;J<ge;J++)z.tweens[J].run(1);return ae?(O.notifyWith(o,[z,1,0]),O.resolveWith(o,[z,ae])):O.rejectWith(o,[z,ae]),this}}),ne=z.props;for(Tn(ne,z.opts.specialEasing);S<b;S++)if(g=Wt.prefilters[S].call(z,o,ne,z.opts),g)return E(g.stop)&&(f._queueHooks(z.elem,z.opts.queue).stop=g.stop.bind(g)),g;return f.map(ne,Ui,z),E(z.opts.start)&&z.opts.start.call(o,z),z.progress(z.opts.progress).done(z.opts.done,z.opts.complete).fail(z.opts.fail).always(z.opts.always),f.fx.timer(f.extend(N,{elem:o,anim:z,queue:z.opts.queue})),z}f.Animation=f.extend(Wt,{tweeners:{"*":[function(o,c){var d=this.createTween(o,c);return Nt(d.elem,o,De.exec(c),d),d}]},tweener:function(o,c){E(o)?(c=o,o=["*"]):o=o.match(He);for(var d,g=0,M=o.length;g<M;g++)d=o[g],Wt.tweeners[d]=Wt.tweeners[d]||[],Wt.tweeners[d].unshift(c)},prefilters:[zt],prefilter:function(o,c){c?Wt.prefilters.unshift(o):Wt.prefilters.push(o)}}),f.speed=function(o,c,d){var g=o&&typeof o=="object"?f.extend({},o):{complete:d||!d&&c||E(o)&&o,duration:o,easing:d&&c||c&&!E(c)&&c};return f.fx.off?g.duration=0:typeof g.duration!="number"&&(g.duration in f.fx.speeds?g.duration=f.fx.speeds[g.duration]:g.duration=f.fx.speeds._default),(g.queue==null||g.queue===!0)&&(g.queue="fx"),g.old=g.complete,g.complete=function(){E(g.old)&&g.old.call(this),g.queue&&f.dequeue(this,g.queue)},g},f.fn.extend({fadeTo:function(o,c,d,g){return this.filter(nt).css("opacity",0).show().end().animate({opacity:c},o,d,g)},animate:function(o,c,d,g){var M=f.isEmptyObject(o),S=f.speed(c,d,g),b=function(){var O=Wt(this,f.extend({},o),S);(M||Z.get(this,"finish"))&&O.stop(!0)};return b.finish=b,M||S.queue===!1?this.each(b):this.queue(S.queue,b)},stop:function(o,c,d){var g=function(M){var S=M.stop;delete M.stop,S(d)};return typeof o!="string"&&(d=c,c=o,o=void 0),c&&this.queue(o||"fx",[]),this.each(function(){var M=!0,S=o!=null&&o+"queueHooks",b=f.timers,O=Z.get(this);if(S)O[S]&&O[S].stop&&g(O[S]);else for(S in O)O[S]&&O[S].stop&&Ct.test(S)&&g(O[S]);for(S=b.length;S--;)b[S].elem===this&&(o==null||b[S].queue===o)&&(b[S].anim.stop(d),M=!1,b.splice(S,1));(M||!d)&&f.dequeue(this,o)})},finish:function(o){return o!==!1&&(o=o||"fx"),this.each(function(){var c,d=Z.get(this),g=d[o+"queue"],M=d[o+"queueHooks"],S=f.timers,b=g?g.length:0;for(d.finish=!0,f.queue(this,o,[]),M&&M.stop&&M.stop.call(this,!0),c=S.length;c--;)S[c].elem===this&&S[c].queue===o&&(S[c].anim.stop(!0),S.splice(c,1));for(c=0;c<b;c++)g[c]&&g[c].finish&&g[c].finish.call(this);delete d.finish})}}),f.each(["toggle","show","hide"],function(o,c){var d=f.fn[c];f.fn[c]=function(g,M,S){return g==null||typeof g=="boolean"?d.apply(this,arguments):this.animate(nn(c,!0),g,M,S)}}),f.each({slideDown:nn("show"),slideUp:nn("hide"),slideToggle:nn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(o,c){f.fn[o]=function(d,g,M){return this.animate(c,d,g,M)}}),f.timers=[],f.fx.tick=function(){var o,c=0,d=f.timers;for(dt=Date.now();c<d.length;c++)o=d[c],!o()&&d[c]===o&&d.splice(c--,1);d.length||f.fx.stop(),dt=void 0},f.fx.timer=function(o){f.timers.push(o),f.fx.start()},f.fx.interval=13,f.fx.start=function(){We||(We=!0,fn())},f.fx.stop=function(){We=null},f.fx.speeds={slow:600,fast:200,_default:400},f.fn.delay=function(o,c){return o=f.fx&&f.fx.speeds[o]||o,c=c||"fx",this.queue(c,function(d,g){var M=e.setTimeout(d,o);g.stop=function(){e.clearTimeout(M)}})},function(){var o=x.createElement("input"),c=x.createElement("select"),d=c.appendChild(x.createElement("option"));o.type="checkbox",T.checkOn=o.value!=="",T.optSelected=d.selected,o=x.createElement("input"),o.value="t",o.type="radio",T.radioValue=o.value==="t"}();var rn,Kt=f.expr.attrHandle;f.fn.extend({attr:function(o,c){return Oe(this,f.attr,o,c,arguments.length>1)},removeAttr:function(o){return this.each(function(){f.removeAttr(this,o)})}}),f.extend({attr:function(o,c,d){var g,M,S=o.nodeType;if(!(S===3||S===8||S===2)){if(typeof o.getAttribute>"u")return f.prop(o,c,d);if((S!==1||!f.isXMLDoc(o))&&(M=f.attrHooks[c.toLowerCase()]||(f.expr.match.bool.test(c)?rn:void 0)),d!==void 0){if(d===null){f.removeAttr(o,c);return}return M&&"set"in M&&(g=M.set(o,d,c))!==void 0?g:(o.setAttribute(c,d+""),d)}return M&&"get"in M&&(g=M.get(o,c))!==null?g:(g=f.find.attr(o,c),g??void 0)}},attrHooks:{type:{set:function(o,c){if(!T.radioValue&&c==="radio"&&C(o,"input")){var d=o.value;return o.setAttribute("type",c),d&&(o.value=d),c}}}},removeAttr:function(o,c){var d,g=0,M=c&&c.match(He);if(M&&o.nodeType===1)for(;d=M[g++];)o.removeAttribute(d)}}),rn={set:function(o,c,d){return c===!1?f.removeAttr(o,d):o.setAttribute(d,d),d}},f.each(f.expr.match.bool.source.match(/\w+/g),function(o,c){var d=Kt[c]||f.find.attr;Kt[c]=function(g,M,S){var b,O,N=M.toLowerCase();return S||(O=Kt[N],Kt[N]=b,b=d(g,M,S)!=null?N:null,Kt[N]=O),b}});var fs=/^(?:input|select|textarea|button)$/i,pi=/^(?:a|area)$/i;f.fn.extend({prop:function(o,c){return Oe(this,f.prop,o,c,arguments.length>1)},removeProp:function(o){return this.each(function(){delete this[f.propFix[o]||o]})}}),f.extend({prop:function(o,c,d){var g,M,S=o.nodeType;if(!(S===3||S===8||S===2))return(S!==1||!f.isXMLDoc(o))&&(c=f.propFix[c]||c,M=f.propHooks[c]),d!==void 0?M&&"set"in M&&(g=M.set(o,d,c))!==void 0?g:o[c]=d:M&&"get"in M&&(g=M.get(o,c))!==null?g:o[c]},propHooks:{tabIndex:{get:function(o){var c=f.find.attr(o,"tabindex");return c?parseInt(c,10):fs.test(o.nodeName)||pi.test(o.nodeName)&&o.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),T.optSelected||(f.propHooks.selected={get:function(o){var c=o.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(o){var c=o.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),f.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){f.propFix[this.toLowerCase()]=this});function er(o){var c=o.match(He)||[];return c.join(" ")}function tr(o){return o.getAttribute&&o.getAttribute("class")||""}function Yo(o){return Array.isArray(o)?o:typeof o=="string"?o.match(He)||[]:[]}f.fn.extend({addClass:function(o){var c,d,g,M,S,b;return E(o)?this.each(function(O){f(this).addClass(o.call(this,O,tr(this)))}):(c=Yo(o),c.length?this.each(function(){if(g=tr(this),d=this.nodeType===1&&" "+er(g)+" ",d){for(S=0;S<c.length;S++)M=c[S],d.indexOf(" "+M+" ")<0&&(d+=M+" ");b=er(d),g!==b&&this.setAttribute("class",b)}}):this)},removeClass:function(o){var c,d,g,M,S,b;return E(o)?this.each(function(O){f(this).removeClass(o.call(this,O,tr(this)))}):arguments.length?(c=Yo(o),c.length?this.each(function(){if(g=tr(this),d=this.nodeType===1&&" "+er(g)+" ",d){for(S=0;S<c.length;S++)for(M=c[S];d.indexOf(" "+M+" ")>-1;)d=d.replace(" "+M+" "," ");b=er(d),g!==b&&this.setAttribute("class",b)}}):this):this.attr("class","")},toggleClass:function(o,c){var d,g,M,S,b=typeof o,O=b==="string"||Array.isArray(o);return E(o)?this.each(function(N){f(this).toggleClass(o.call(this,N,tr(this),c),c)}):typeof c=="boolean"&&O?c?this.addClass(o):this.removeClass(o):(d=Yo(o),this.each(function(){if(O)for(S=f(this),M=0;M<d.length;M++)g=d[M],S.hasClass(g)?S.removeClass(g):S.addClass(g);else(o===void 0||b==="boolean")&&(g=tr(this),g&&Z.set(this,"__className__",g),this.setAttribute&&this.setAttribute("class",g||o===!1?"":Z.get(this,"__className__")||""))}))},hasClass:function(o){var c,d,g=0;for(c=" "+o+" ";d=this[g++];)if(d.nodeType===1&&(" "+er(tr(d))+" ").indexOf(c)>-1)return!0;return!1}});var Qh=/\r/g;f.fn.extend({val:function(o){var c,d,g,M=this[0];return arguments.length?(g=E(o),this.each(function(S){var b;this.nodeType===1&&(g?b=o.call(this,S,f(this).val()):b=o,b==null?b="":typeof b=="number"?b+="":Array.isArray(b)&&(b=f.map(b,function(O){return O==null?"":O+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,b,"value")===void 0)&&(this.value=b))})):M?(c=f.valHooks[M.type]||f.valHooks[M.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(M,"value"))!==void 0?d:(d=M.value,typeof d=="string"?d.replace(Qh,""):d??"")):void 0}}),f.extend({valHooks:{option:{get:function(o){var c=f.find.attr(o,"value");return c??er(f.text(o))}},select:{get:function(o){var c,d,g,M=o.options,S=o.selectedIndex,b=o.type==="select-one",O=b?null:[],N=b?S+1:M.length;for(S<0?g=N:g=b?S:0;g<N;g++)if(d=M[g],(d.selected||g===S)&&!d.disabled&&(!d.parentNode.disabled||!C(d.parentNode,"optgroup"))){if(c=f(d).val(),b)return c;O.push(c)}return O},set:function(o,c){for(var d,g,M=o.options,S=f.makeArray(c),b=M.length;b--;)g=M[b],(g.selected=f.inArray(f.valHooks.option.get(g),S)>-1)&&(d=!0);return d||(o.selectedIndex=-1),S}}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]={set:function(o,c){if(Array.isArray(c))return o.checked=f.inArray(f(o).val(),c)>-1}},T.checkOn||(f.valHooks[this].get=function(o){return o.getAttribute("value")===null?"on":o.value})});var ds=e.location,hc={guid:Date.now()},Ko=/\?/;f.parseXML=function(o){var c,d;if(!o||typeof o!="string")return null;try{c=new e.DOMParser().parseFromString(o,"text/xml")}catch{}return d=c&&c.getElementsByTagName("parsererror")[0],(!c||d)&&f.error("Invalid XML: "+(d?f.map(d.childNodes,function(g){return g.textContent}).join(`
`):o)),c};var fc=/^(?:focusinfocus|focusoutblur)$/,dc=function(o){o.stopPropagation()};f.extend(f.event,{trigger:function(o,c,d,g){var M,S,b,O,N,z,ne,ae,J=[d||x],ge=m.call(o,"type")?o.type:o,tt=m.call(o,"namespace")?o.namespace.split("."):[];if(S=ae=b=d=d||x,!(d.nodeType===3||d.nodeType===8)&&!fc.test(ge+f.event.triggered)&&(ge.indexOf(".")>-1&&(tt=ge.split("."),ge=tt.shift(),tt.sort()),N=ge.indexOf(":")<0&&"on"+ge,o=o[f.expando]?o:new f.Event(ge,typeof o=="object"&&o),o.isTrigger=g?2:3,o.namespace=tt.join("."),o.rnamespace=o.namespace?new RegExp("(^|\\.)"+tt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,o.result=void 0,o.target||(o.target=d),c=c==null?[o]:f.makeArray(c,[o]),ne=f.event.special[ge]||{},!(!g&&ne.trigger&&ne.trigger.apply(d,c)===!1))){if(!g&&!ne.noBubble&&!y(d)){for(O=ne.delegateType||ge,fc.test(O+ge)||(S=S.parentNode);S;S=S.parentNode)J.push(S),b=S;b===(d.ownerDocument||x)&&J.push(b.defaultView||b.parentWindow||e)}for(M=0;(S=J[M++])&&!o.isPropagationStopped();)ae=S,o.type=M>1?O:ne.bindType||ge,z=(Z.get(S,"events")||Object.create(null))[o.type]&&Z.get(S,"handle"),z&&z.apply(S,c),z=N&&S[N],z&&z.apply&&$(S)&&(o.result=z.apply(S,c),o.result===!1&&o.preventDefault());return o.type=ge,!g&&!o.isDefaultPrevented()&&(!ne._default||ne._default.apply(J.pop(),c)===!1)&&$(d)&&N&&E(d[ge])&&!y(d)&&(b=d[N],b&&(d[N]=null),f.event.triggered=ge,o.isPropagationStopped()&&ae.addEventListener(ge,dc),d[ge](),o.isPropagationStopped()&&ae.removeEventListener(ge,dc),f.event.triggered=void 0,b&&(d[N]=b)),o.result}},simulate:function(o,c,d){var g=f.extend(new f.Event,d,{type:o,isSimulated:!0});f.event.trigger(g,null,c)}}),f.fn.extend({trigger:function(o,c){return this.each(function(){f.event.trigger(o,c,this)})},triggerHandler:function(o,c){var d=this[0];if(d)return f.event.trigger(o,c,d,!0)}});var ef=/\[\]$/,pc=/\r?\n/g,tf=/^(?:submit|button|image|reset|file)$/i,nf=/^(?:input|select|textarea|keygen)/i;function $o(o,c,d,g){var M;if(Array.isArray(c))f.each(c,function(S,b){d||ef.test(o)?g(o,b):$o(o+"["+(typeof b=="object"&&b!=null?S:"")+"]",b,d,g)});else if(!d&&P(c)==="object")for(M in c)$o(o+"["+M+"]",c[M],d,g);else g(o,c)}f.param=function(o,c){var d,g=[],M=function(S,b){var O=E(b)?b():b;g[g.length]=encodeURIComponent(S)+"="+encodeURIComponent(O??"")};if(o==null)return"";if(Array.isArray(o)||o.jquery&&!f.isPlainObject(o))f.each(o,function(){M(this.name,this.value)});else for(d in o)$o(d,o[d],c,M);return g.join("&")},f.fn.extend({serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var o=f.prop(this,"elements");return o?f.makeArray(o):this}).filter(function(){var o=this.type;return this.name&&!f(this).is(":disabled")&&nf.test(this.nodeName)&&!tf.test(o)&&(this.checked||!he.test(o))}).map(function(o,c){var d=f(this).val();return d==null?null:Array.isArray(d)?f.map(d,function(g){return{name:c.name,value:g.replace(pc,`\r
`)}}):{name:c.name,value:d.replace(pc,`\r
`)}}).get()}});var rf=/%20/g,sf=/#.*$/,of=/([?&])_=[^&]*/,af=/^(.*?):[ \t]*([^\r\n]*)$/mg,lf=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,cf=/^(?:GET|HEAD)$/,uf=/^\/\//,mc={},Zo={},gc="*/".concat("*"),Jo=x.createElement("a");Jo.href=ds.href;function _c(o){return function(c,d){typeof c!="string"&&(d=c,c="*");var g,M=0,S=c.toLowerCase().match(He)||[];if(E(d))for(;g=S[M++];)g[0]==="+"?(g=g.slice(1)||"*",(o[g]=o[g]||[]).unshift(d)):(o[g]=o[g]||[]).push(d)}}function xc(o,c,d,g){var M={},S=o===Zo;function b(O){var N;return M[O]=!0,f.each(o[O]||[],function(z,ne){var ae=ne(c,d,g);if(typeof ae=="string"&&!S&&!M[ae])return c.dataTypes.unshift(ae),b(ae),!1;if(S)return!(N=ae)}),N}return b(c.dataTypes[0])||!M["*"]&&b("*")}function Qo(o,c){var d,g,M=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==void 0&&((M[d]?o:g||(g={}))[d]=c[d]);return g&&f.extend(!0,o,g),o}function hf(o,c,d){for(var g,M,S,b,O=o.contents,N=o.dataTypes;N[0]==="*";)N.shift(),g===void 0&&(g=o.mimeType||c.getResponseHeader("Content-Type"));if(g){for(M in O)if(O[M]&&O[M].test(g)){N.unshift(M);break}}if(N[0]in d)S=N[0];else{for(M in d){if(!N[0]||o.converters[M+" "+N[0]]){S=M;break}b||(b=M)}S=S||b}if(S)return S!==N[0]&&N.unshift(S),d[S]}function ff(o,c,d,g){var M,S,b,O,N,z={},ne=o.dataTypes.slice();if(ne[1])for(b in o.converters)z[b.toLowerCase()]=o.converters[b];for(S=ne.shift();S;)if(o.responseFields[S]&&(d[o.responseFields[S]]=c),!N&&g&&o.dataFilter&&(c=o.dataFilter(c,o.dataType)),N=S,S=ne.shift(),S){if(S==="*")S=N;else if(N!=="*"&&N!==S){if(b=z[N+" "+S]||z["* "+S],!b){for(M in z)if(O=M.split(" "),O[1]===S&&(b=z[N+" "+O[0]]||z["* "+O[0]],b)){b===!0?b=z[M]:z[M]!==!0&&(S=O[0],ne.unshift(O[1]));break}}if(b!==!0)if(b&&o.throws)c=b(c);else try{c=b(c)}catch(ae){return{state:"parsererror",error:b?ae:"No conversion from "+N+" to "+S}}}}return{state:"success",data:c}}f.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ds.href,type:"GET",isLocal:lf.test(ds.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":gc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":f.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(o,c){return c?Qo(Qo(o,f.ajaxSettings),c):Qo(f.ajaxSettings,o)},ajaxPrefilter:_c(mc),ajaxTransport:_c(Zo),ajax:function(o,c){typeof o=="object"&&(c=o,o=void 0),c=c||{};var d,g,M,S,b,O,N,z,ne,ae,J=f.ajaxSetup({},c),ge=J.context||J,tt=J.context&&(ge.nodeType||ge.jquery)?f(ge):f.event,At=f.Deferred(),ct=f.Callbacks("once memory"),ln=J.statusCode||{},Jt={},Zn={},Jn="canceled",Tt={readyState:0,getResponseHeader:function(Rt){var jt;if(N){if(!S)for(S={};jt=af.exec(M);)S[jt[1].toLowerCase()+" "]=(S[jt[1].toLowerCase()+" "]||[]).concat(jt[2]);jt=S[Rt.toLowerCase()+" "]}return jt==null?null:jt.join(", ")},getAllResponseHeaders:function(){return N?M:null},setRequestHeader:function(Rt,jt){return N==null&&(Rt=Zn[Rt.toLowerCase()]=Zn[Rt.toLowerCase()]||Rt,Jt[Rt]=jt),this},overrideMimeType:function(Rt){return N==null&&(J.mimeType=Rt),this},statusCode:function(Rt){var jt;if(Rt)if(N)Tt.always(Rt[Tt.status]);else for(jt in Rt)ln[jt]=[ln[jt],Rt[jt]];return this},abort:function(Rt){var jt=Rt||Jn;return d&&d.abort(jt),nr(0,jt),this}};if(At.promise(Tt),J.url=((o||J.url||ds.href)+"").replace(uf,ds.protocol+"//"),J.type=c.method||c.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(He)||[""],J.crossDomain==null){O=x.createElement("a");try{O.href=J.url,O.href=O.href,J.crossDomain=Jo.protocol+"//"+Jo.host!=O.protocol+"//"+O.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=f.param(J.data,J.traditional)),xc(mc,J,c,Tt),N)return Tt;z=f.event&&J.global,z&&f.active++===0&&f.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!cf.test(J.type),g=J.url.replace(sf,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(rf,"+")):(ae=J.url.slice(g.length),J.data&&(J.processData||typeof J.data=="string")&&(g+=(Ko.test(g)?"&":"?")+J.data,delete J.data),J.cache===!1&&(g=g.replace(of,"$1"),ae=(Ko.test(g)?"&":"?")+"_="+hc.guid+++ae),J.url=g+ae),J.ifModified&&(f.lastModified[g]&&Tt.setRequestHeader("If-Modified-Since",f.lastModified[g]),f.etag[g]&&Tt.setRequestHeader("If-None-Match",f.etag[g])),(J.data&&J.hasContent&&J.contentType!==!1||c.contentType)&&Tt.setRequestHeader("Content-Type",J.contentType),Tt.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+gc+"; q=0.01":""):J.accepts["*"]);for(ne in J.headers)Tt.setRequestHeader(ne,J.headers[ne]);if(J.beforeSend&&(J.beforeSend.call(ge,Tt,J)===!1||N))return Tt.abort();if(Jn="abort",ct.add(J.complete),Tt.done(J.success),Tt.fail(J.error),d=xc(Zo,J,c,Tt),!d)nr(-1,"No Transport");else{if(Tt.readyState=1,z&&tt.trigger("ajaxSend",[Tt,J]),N)return Tt;J.async&&J.timeout>0&&(b=e.setTimeout(function(){Tt.abort("timeout")},J.timeout));try{N=!1,d.send(Jt,nr)}catch(Rt){if(N)throw Rt;nr(-1,Rt)}}function nr(Rt,jt,ms,ta){var Qn,gs,ei,Oi,Fi,Dn=jt;N||(N=!0,b&&e.clearTimeout(b),d=void 0,M=ta||"",Tt.readyState=Rt>0?4:0,Qn=Rt>=200&&Rt<300||Rt===304,ms&&(Oi=hf(J,Tt,ms)),!Qn&&f.inArray("script",J.dataTypes)>-1&&f.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),Oi=ff(J,Oi,Tt,Qn),Qn?(J.ifModified&&(Fi=Tt.getResponseHeader("Last-Modified"),Fi&&(f.lastModified[g]=Fi),Fi=Tt.getResponseHeader("etag"),Fi&&(f.etag[g]=Fi)),Rt===204||J.type==="HEAD"?Dn="nocontent":Rt===304?Dn="notmodified":(Dn=Oi.state,gs=Oi.data,ei=Oi.error,Qn=!ei)):(ei=Dn,(Rt||!Dn)&&(Dn="error",Rt<0&&(Rt=0))),Tt.status=Rt,Tt.statusText=(jt||Dn)+"",Qn?At.resolveWith(ge,[gs,Dn,Tt]):At.rejectWith(ge,[Tt,Dn,ei]),Tt.statusCode(ln),ln=void 0,z&&tt.trigger(Qn?"ajaxSuccess":"ajaxError",[Tt,J,Qn?gs:ei]),ct.fireWith(ge,[Tt,Dn]),z&&(tt.trigger("ajaxComplete",[Tt,J]),--f.active||f.event.trigger("ajaxStop")))}return Tt},getJSON:function(o,c,d){return f.get(o,c,d,"json")},getScript:function(o,c){return f.get(o,void 0,c,"script")}}),f.each(["get","post"],function(o,c){f[c]=function(d,g,M,S){return E(g)&&(S=S||M,M=g,g=void 0),f.ajax(f.extend({url:d,type:c,dataType:S,data:g,success:M},f.isPlainObject(d)&&d))}}),f.ajaxPrefilter(function(o){var c;for(c in o.headers)c.toLowerCase()==="content-type"&&(o.contentType=o.headers[c]||"")}),f._evalUrl=function(o,c,d){return f.ajax({url:o,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(g){f.globalEval(g,c,d)}})},f.fn.extend({wrapAll:function(o){var c;return this[0]&&(E(o)&&(o=o.call(this[0])),c=f(o,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var d=this;d.firstElementChild;)d=d.firstElementChild;return d}).append(this)),this},wrapInner:function(o){return E(o)?this.each(function(c){f(this).wrapInner(o.call(this,c))}):this.each(function(){var c=f(this),d=c.contents();d.length?d.wrapAll(o):c.append(o)})},wrap:function(o){var c=E(o);return this.each(function(d){f(this).wrapAll(c?o.call(this,d):o)})},unwrap:function(o){return this.parent(o).not("body").each(function(){f(this).replaceWith(this.childNodes)}),this}}),f.expr.pseudos.hidden=function(o){return!f.expr.pseudos.visible(o)},f.expr.pseudos.visible=function(o){return!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length)},f.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var df={0:200,1223:204},ps=f.ajaxSettings.xhr();T.cors=!!ps&&"withCredentials"in ps,T.ajax=ps=!!ps,f.ajaxTransport(function(o){var c,d;if(T.cors||ps&&!o.crossDomain)return{send:function(g,M){var S,b=o.xhr();if(b.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(S in o.xhrFields)b[S]=o.xhrFields[S];o.mimeType&&b.overrideMimeType&&b.overrideMimeType(o.mimeType),!o.crossDomain&&!g["X-Requested-With"]&&(g["X-Requested-With"]="XMLHttpRequest");for(S in g)b.setRequestHeader(S,g[S]);c=function(O){return function(){c&&(c=d=b.onload=b.onerror=b.onabort=b.ontimeout=b.onreadystatechange=null,O==="abort"?b.abort():O==="error"?typeof b.status!="number"?M(0,"error"):M(b.status,b.statusText):M(df[b.status]||b.status,b.statusText,(b.responseType||"text")!=="text"||typeof b.responseText!="string"?{binary:b.response}:{text:b.responseText},b.getAllResponseHeaders()))}},b.onload=c(),d=b.onerror=b.ontimeout=c("error"),b.onabort!==void 0?b.onabort=d:b.onreadystatechange=function(){b.readyState===4&&e.setTimeout(function(){c&&d()})},c=c("abort");try{b.send(o.hasContent&&o.data||null)}catch(O){if(c)throw O}},abort:function(){c&&c()}}}),f.ajaxPrefilter(function(o){o.crossDomain&&(o.contents.script=!1)}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(o){return f.globalEval(o),o}}}),f.ajaxPrefilter("script",function(o){o.cache===void 0&&(o.cache=!1),o.crossDomain&&(o.type="GET")}),f.ajaxTransport("script",function(o){if(o.crossDomain||o.scriptAttrs){var c,d;return{send:function(g,M){c=f("<script>").attr(o.scriptAttrs||{}).prop({charset:o.scriptCharset,src:o.url}).on("load error",d=function(S){c.remove(),d=null,S&&M(S.type==="error"?404:200,S.type)}),x.head.appendChild(c[0])},abort:function(){d&&d()}}}});var vc=[],ea=/(=)\?(?=&|$)|\?\?/;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var o=vc.pop()||f.expando+"_"+hc.guid++;return this[o]=!0,o}}),f.ajaxPrefilter("json jsonp",function(o,c,d){var g,M,S,b=o.jsonp!==!1&&(ea.test(o.url)?"url":typeof o.data=="string"&&(o.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ea.test(o.data)&&"data");if(b||o.dataTypes[0]==="jsonp")return g=o.jsonpCallback=E(o.jsonpCallback)?o.jsonpCallback():o.jsonpCallback,b?o[b]=o[b].replace(ea,"$1"+g):o.jsonp!==!1&&(o.url+=(Ko.test(o.url)?"&":"?")+o.jsonp+"="+g),o.converters["script json"]=function(){return S||f.error(g+" was not called"),S[0]},o.dataTypes[0]="json",M=e[g],e[g]=function(){S=arguments},d.always(function(){M===void 0?f(e).removeProp(g):e[g]=M,o[g]&&(o.jsonpCallback=c.jsonpCallback,vc.push(g)),S&&E(M)&&M(S[0]),S=M=void 0}),"script"}),T.createHTMLDocument=function(){var o=x.implementation.createHTMLDocument("").body;return o.innerHTML="<form></form><form></form>",o.childNodes.length===2}(),f.parseHTML=function(o,c,d){if(typeof o!="string")return[];typeof c=="boolean"&&(d=c,c=!1);var g,M,S;return c||(T.createHTMLDocument?(c=x.implementation.createHTMLDocument(""),g=c.createElement("base"),g.href=x.location.href,c.head.appendChild(g)):c=x),M=lt.exec(o),S=!d&&[],M?[c.createElement(M[1])]:(M=Sn([o],c,S),S&&S.length&&f(S).remove(),f.merge([],M.childNodes))},f.fn.load=function(o,c,d){var g,M,S,b=this,O=o.indexOf(" ");return O>-1&&(g=er(o.slice(O)),o=o.slice(0,O)),E(c)?(d=c,c=void 0):c&&typeof c=="object"&&(M="POST"),b.length>0&&f.ajax({url:o,type:M||"GET",dataType:"html",data:c}).done(function(N){S=arguments,b.html(g?f("<div>").append(f.parseHTML(N)).find(g):N)}).always(d&&function(N,z){b.each(function(){d.apply(this,S||[N.responseText,z,N])})}),this},f.expr.pseudos.animated=function(o){return f.grep(f.timers,function(c){return o===c.elem}).length},f.offset={setOffset:function(o,c,d){var g,M,S,b,O,N,z,ne=f.css(o,"position"),ae=f(o),J={};ne==="static"&&(o.style.position="relative"),O=ae.offset(),S=f.css(o,"top"),N=f.css(o,"left"),z=(ne==="absolute"||ne==="fixed")&&(S+N).indexOf("auto")>-1,z?(g=ae.position(),b=g.top,M=g.left):(b=parseFloat(S)||0,M=parseFloat(N)||0),E(c)&&(c=c.call(o,d,f.extend({},O))),c.top!=null&&(J.top=c.top-O.top+b),c.left!=null&&(J.left=c.left-O.left+M),"using"in c?c.using.call(o,J):ae.css(J)}},f.fn.extend({offset:function(o){if(arguments.length)return o===void 0?this:this.each(function(M){f.offset.setOffset(this,o,M)});var c,d,g=this[0];if(g)return g.getClientRects().length?(c=g.getBoundingClientRect(),d=g.ownerDocument.defaultView,{top:c.top+d.pageYOffset,left:c.left+d.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var o,c,d,g=this[0],M={top:0,left:0};if(f.css(g,"position")==="fixed")c=g.getBoundingClientRect();else{for(c=this.offset(),d=g.ownerDocument,o=g.offsetParent||d.documentElement;o&&(o===d.body||o===d.documentElement)&&f.css(o,"position")==="static";)o=o.parentNode;o&&o!==g&&o.nodeType===1&&(M=f(o).offset(),M.top+=f.css(o,"borderTopWidth",!0),M.left+=f.css(o,"borderLeftWidth",!0))}return{top:c.top-M.top-f.css(g,"marginTop",!0),left:c.left-M.left-f.css(g,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var o=this.offsetParent;o&&f.css(o,"position")==="static";)o=o.offsetParent;return o||je})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(o,c){var d=c==="pageYOffset";f.fn[o]=function(g){return Oe(this,function(M,S,b){var O;if(y(M)?O=M:M.nodeType===9&&(O=M.defaultView),b===void 0)return O?O[c]:M[S];O?O.scrollTo(d?O.pageXOffset:b,d?b:O.pageYOffset):M[S]=b},o,g,arguments.length)}}),f.each(["top","left"],function(o,c){f.cssHooks[c]=ee(T.pixelPosition,function(d,g){if(g)return g=Q(d,c),us.test(g)?f(d).position()[c]+"px":g})}),f.each({Height:"height",Width:"width"},function(o,c){f.each({padding:"inner"+o,content:c,"":"outer"+o},function(d,g){f.fn[g]=function(M,S){var b=arguments.length&&(d||typeof M!="boolean"),O=d||(M===!0||S===!0?"margin":"border");return Oe(this,function(N,z,ne){var ae;return y(N)?g.indexOf("outer")===0?N["inner"+o]:N.document.documentElement["client"+o]:N.nodeType===9?(ae=N.documentElement,Math.max(N.body["scroll"+o],ae["scroll"+o],N.body["offset"+o],ae["offset"+o],ae["client"+o])):ne===void 0?f.css(N,z,O):f.style(N,z,ne,O)},c,b?M:void 0,b)}})}),f.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(o,c){f.fn[c]=function(d){return this.on(c,d)}}),f.fn.extend({bind:function(o,c,d){return this.on(o,null,c,d)},unbind:function(o,c){return this.off(o,null,c)},delegate:function(o,c,d,g){return this.on(c,o,d,g)},undelegate:function(o,c,d){return arguments.length===1?this.off(o,"**"):this.off(c,o||"**",d)},hover:function(o,c){return this.on("mouseenter",o).on("mouseleave",c||o)}}),f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(o,c){f.fn[c]=function(d,g){return arguments.length>0?this.on(c,null,d,g):this.trigger(c)}});var pf=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;f.proxy=function(o,c){var d,g,M;if(typeof c=="string"&&(d=o[c],c=o,o=d),!!E(o))return g=s.call(arguments,2),M=function(){return o.apply(c||this,g.concat(s.call(arguments)))},M.guid=o.guid=o.guid||f.guid++,M},f.holdReady=function(o){o?f.readyWait++:f.ready(!0)},f.isArray=Array.isArray,f.parseJSON=JSON.parse,f.nodeName=C,f.isFunction=E,f.isWindow=y,f.camelCase=A,f.type=P,f.now=Date.now,f.isNumeric=function(o){var c=f.type(o);return(c==="number"||c==="string")&&!isNaN(o-parseFloat(o))},f.trim=function(o){return o==null?"":(o+"").replace(pf,"$1")};var mf=e.jQuery,gf=e.$;return f.noConflict=function(o){return e.$===f&&(e.$=gf),o&&e.jQuery===f&&(e.jQuery=mf),f},typeof t>"u"&&(e.jQuery=e.$=f),f})}(Bo)),Bo.exports}var I0=D0();const Zu=P0(I0),is=new ip;let Hl="-999";performance.now();const wi=["red","orange","yellow","green","blue","purple","pink","black","white","gray"];let Un=[];for(let r=0;r<wi.length;r++)Un.push(new ii({color:wi[r],name:wi[r]}));const N0=new Map([["red",Un[0]],["orange",Un[1]],["yellow",Un[2]],["green",Un[3]],["blue",Un[4]],["purple",Un[5]],["pink",Un[6]],["black",Un[7]],["white",Un[8]],["gray",Un[9]]]),U0=new Map([["LLL_Wall",-6],["LL_Wall",-4],["L_Wall",-2],["Wall",0],["R_Wall",2],["RR_Wall",4],["RRR_Wall",6]]),O0=new Kv,qh=Array.from(U0.keys()),F0=qh.length,uc=[];let Xa;for(let r=0;r<F0;r++)O0.load("objs/"+qh[r]+".glb",function(e){Xa=e.scene.children[0],Xa.position.set(0,1,-10),uc.push(Xa)},void 0,function(e){console.log("fail!"),console.error(e),console.log("objs/"+wall_type+".glb")});console.log("all walls array:");console.log(uc);const B0=new Uh;let jh=B0.load("textures/pixel sky.jpg");jh.colorSpace=on;is.background=jh;const Di=new gn(40,window.innerWidth/window.innerHeight,.01,1e3);Di.position.x=0;Di.position.y=6.6;Di.position.z=23;Di.rotation.x=-16;Di.rotation.x=0;Di.rotation.x=0;const Gs=new Nv;Gs.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Gs.domElement);const k0=new Ov(Di,Gs.domElement);k0.update();const H0=new zs(16,30),z0=new ii({color:"#B6FE80",side:Gn}),Yh=new _n(H0,z0);Yh.rotation.x=-1.5708;is.add(Yh);const V0=new rs(1,1,1);let Kh=N0.get("red");Kh.name="red";let ri=new _n(V0,Kh);ri.position.set(0,.5,10);is.add(ri);function Ju(r){if(r.length===0)return;const e=Math.floor(Math.random()*r.length);return r[e]}let An=[];function G0(){let r;r=Ju(uc),r.position.set(0,1,-10),r.material=Ju(Un),is.add(r),An.push(r),console.log("Spawned wall: "+r.name)}function W0(r){let e;return r.name=="LLL_Wall"?e=-6:r.name=="LL_Wall"?e=-4:r.name=="L_Wall"?e=-2:r.name=="Wall"?e=0:r.name=="R_Wall"?e=2:r.name=="RR_Wall"?e=4:r.name=="RRR_Wall"&&(e=6),e}let Qu=!1;const X0=new Fh;let eh=0,th=0,nh=6,q0=.15,qa=6,Ro=0,ja=.03,Ya,Co=!0;function j0(){if(Qu==!1&&(th=X0.getDelta(),eh+=th,eh>qa&&(nh-=q0,qa=qa+nh,G0(),Co==!1&&(Co=!0)),An.length>0)){ja=ja+5e-6,Co==!0&&(Ya=W0(An[0]),console.log(Ya),Co=!1);for(let r=0;r<An.length;r++)An[r].position.z+=ja;An[0].position.z>10&&An[0].position.z<11.5&&(console.log("wall color"+An[0].material.name),console.log("player color"+ri.material.name),(ri.position.x!=Ya||ri.material.name!=An[0].material.name)&&(game_over.style.backgroundColor=An[0].material.name,ji==!0&&Q0.play(),Zu("#game_over").fadeIn("slow"),game_over.innerHTML="GAME OVER!",Qu=!0,game_over.innerHTML+='<p id="final_score"></p>',final_score.innerHTML="Final score: "+Ro,Hl!="-999"&&(game_over.innerHTML+='<p id="death_note"></p>',death_note.innerHTML=Hl),game_over.innerHTML+='<span id="replay" hidden>Play Again?</span>',Zu("#replay").fadeIn("3000"),replay.onclick=function(){window.location.reload()})),An[0].position.z>12&&(console.log("Wall array length is: "),console.log(An.length),is.remove(An[0]),An.shift(),Ro++,ji==!0&&J0.play(),current_score.innerHTML=Ro)}current_score.innerHTML=Ro,Gs.render(is,Di)}Gs.setAnimationLoop(j0);document.addEventListener("keyup",Y0,!1);document.addEventListener("keydown",function(r){(r.keyCode===32||r.key===" ")&&(["Space"].indexOf(r.code)>-1&&r.preventDefault(),Kn.start(),console.log("Ready to receive a color command."),console.log("Spacebar pressed"))});const ih=1;function Y0(r){["Space"].indexOf(r.code)>-1&&r.preventDefault();let e=r.which;e==65&&ri.position.x>=-6?ri.position.x-=ih:e==68&&ri.position.x<=6&&(ri.position.x+=ih)}const K0=window.SpeechRecognition||window.webkitSpeechRecognition,$0=window.SpeechGrammarList||window.webkitSpeechGrammarList,$h=`#JSGF V1.0; grammar colors; public <color> = ${wi.join(" | ")};`;console.log("grammar");console.log($h);const Kn=new K0,Zh=new $0;Zh.addFromString($h,1);Kn.grammars=Zh;Kn.continuous=!1;Kn.lang="en-US";Kn.interimResults=!1;Kn.maxAlternatives=1;let ko="";wi.forEach((r,e)=>{console.log(r,e),e!=wi.length-1?ko+=`<span style="font-size: 1em;"> ${wi[e]}, </span>`:ko+=`<span style="font-size: 1em;"> ${wi[e]} </span>`,console.log(ko)});console_text.innerHTML="Colors:"+ko;Kn.onresult=r=>{let t=r.results[0][0].transcript.toLowerCase();if(Hl='🎙️ Your last words were: "'+t+'" ... 🪦',console.log("spoken color: "+t),wi.includes(t))ri.material=new ii({color:t,name:t});else{console.log("I didn't recognize that color.");return}console.log(`Confidence: ${r.results[0][0].confidence}`),console.log(t)};Kn.onspeechend=()=>{Kn.stop()};Kn.onnomatch=r=>{console.log("I didn't recognize that color.")};Kn.onerror=r=>{console.log(`Error occurred in recognition: ${r.error}`)};const Jh=new Hp;Di.add(Jh);const zr=new zp(Jh),Z0=new Fp;music_icon.addEventListener("mouseover",function(){music_icon.style.cursor="pointer"});music_icon.addEventListener("mouseout",function(){music_icon.style.cursor="default"});let ji=!1,Ka=!1;const J0=new Audio("/audio/23. OK_Button_Variation.wav"),Q0=new Audio("/audio/Reject Sound.wav");music_icon.addEventListener("click",function(){ji==!1?(music_icon.innerHTML="🔊",autoplayer.muted=!1,ji=!0):ji==!0&&(music_icon.innerHTML="🔇",autoplayer.muted=!0,ji=!1),Ka==!1&&(Ka=!0,Ka==!0&&Z0.load("/audio/You Know Me - Jeremy Black.mp3",function(r){zr.setBuffer(r),zr.setLoop(!0),zr.setVolume(.5),zr.play()})),ji==!0?zr.setVolume(.5):ji==!1&&(console.log("SET VOLUME: 0"),zr.setVolume(0))});
