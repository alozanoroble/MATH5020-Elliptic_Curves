︠4de1fd61-49b4-4cd2-979b-8f7a7b77baf0s︠
E=EllipticCurve("11a1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/11a1-order5a.pdf');
p2.save_image('graphs/11a1-order5b.pdf');
p3.save_image('graphs/11a1-order5c.pdf');
︡91a54c59-fa17-48a6-b0f0-56e5158420b8︡{"stdout":"[(5, 5), (16, -61), (16, 60), (5, -6)]\n"}︡{"once":false,"file":{"show":true,"uuid":"44847846-90d5-4b3d-a57c-bf932a69b94f","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_AFyUc5.svg"}}︡{"html":"<div align='center'></div>"}︡
︠cfe19fcb-602f-47b2-956e-5b42c4d6fca3s︠
E=EllipticCurve("11a3");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/11a3-order5a.pdf');
p2.save_image('graphs/11a3-order5b.pdf');
p3.save_image('graphs/11a3-order5c.pdf');
︡32875edb-0b9b-4897-b178-0e69f3917074︡{"stdout":"[(0, 0), (1, -1), (1, 0), (0, -1)]\n"}︡{"once":false,"file":{"show":true,"uuid":"976468eb-355f-41cf-a965-ffa8d180b4ba","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_DqMqj7.svg"}}︡{"html":"<div align='center'></div>"}︡
︠596f79a2-84c1-42e8-a942-738569245d77s︠
E=EllipticCurve("19a1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, 0,5.5,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/19a1-order3a.pdf');
p2.save_image('graphs/19a1-order3b.pdf');
p3.save_image('graphs/19a1-order3c.pdf');
︡0e4cdd81-fdd0-4c94-8944-7f48843c2007︡{"stdout":"[(5, 9), (5, -10)]\n"}︡{"once":false,"file":{"show":true,"uuid":"9527ec64-f83c-480a-a8f3-4629698bc7d8","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_BGvTTr.svg"}}︡{"html":"<div align='center'></div>"}︡
︠821e4a7d-4449-41f8-98fb-f1a7808400b4s︠
E=EllipticCurve("19a3");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,0.4,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/19a3-order3a.pdf');
p2.save_image('graphs/19a3-order3b.pdf');
p3.save_image('graphs/19a3-order3c.pdf');
︡65e979d2-76fd-483c-9432-08bd72036fd6︡{"stdout":"[(0, 0), (0, -1)]\n"}︡{"once":false,"file":{"show":true,"uuid":"ae008fb7-acc6-4cee-b2c3-35d8887c1784","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_nR0p5A.svg"}}︡{"html":"<div align='center'></div>"}︡
︠201991df-d25f-4b3b-a7cc-7a429547f205s︠
E=EllipticCurve("26a1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/26a1-order3a.pdf');
p2.save_image('graphs/26a1-order3b.pdf');
p3.save_image('graphs/26a1-order3c.pdf');
︡228c339d-0eeb-4f3a-9ec5-f1643f2b9c87︡{"stdout":"[(4, 4), (4, -9)]\n"}︡{"once":false,"file":{"show":true,"uuid":"12cb3807-d65a-41ea-bf16-9b2a8b11713d","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_ScVpiS.svg"}}︡{"html":"<div align='center'></div>"}︡
︠3bc5eeaf-110f-455f-82f3-4b7e80d76640s︠
E=EllipticCurve("15a7");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/15a7-order4a.pdf');
p2.save_image('graphs/15a7-order4b.pdf');
p3.save_image('graphs/15a7-order4c.pdf');
︡5fa7e360-1e2a-4175-a6d0-892da27f014a︡{"stdout":"[(5, -2), (19/4, -23/8), (5, -4)]\n"}︡{"once":false,"file":{"show":true,"uuid":"5cf6f25c-a8b9-49f2-a209-096aab090f81","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_5gkai2.svg"}}︡{"html":"<div align='center'></div>"}︡
︠4abba9e4-9752-4569-80bf-a830e5a2ce55︠
︡6a503b23-d2cd-4651-b486-a47b1a37b473︡
︠605e6094-b2b3-47b7-9e25-763b3a9edf36s︠
E=EllipticCurve("15a8");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/15a8-order4a.pdf');
p2.save_image('graphs/15a8-order4b.pdf');
p3.save_image('graphs/15a8-order4c.pdf');
︡9444c518-9019-4239-8d2e-c5af72be1bd3︡{"stdout":"[(0, 0), (-1, 0), (0, -1)]\n"}︡{"once":false,"file":{"show":true,"uuid":"3fa61ff7-f670-450c-aae9-a8f46e2399c6","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_fQiGnx.svg"}}︡{"html":"<div align='center'></div>"}︡
︠cdf8677f-30b9-4e88-9d86-ef976ef3a4c3s︠
E=EllipticCurve("17a1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/17a1-order4a.pdf');
p2.save_image('graphs/17a1-order4b.pdf');
p3.save_image('graphs/17a1-order4c.pdf');
︡83d6aa30-6947-495a-83e0-10be407ca322︡{"stdout":"[(7, 13), (11/4, -15/8), (7, -21)]\n"}︡{"once":false,"file":{"show":true,"uuid":"b839478f-7671-457f-9d67-c8de77fc445f","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_QqAXS6.svg"}}︡{"html":"<div align='center'></div>"}︡
︠656c80a7-78d4-467d-8d35-59f374ac9086s︠
E=EllipticCurve("14a2");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/14a2-order6a.pdf');
p2.save_image('graphs/14a2-order6b.pdf');
p3.save_image('graphs/14a2-order6c.pdf');
︡f69faff3-1fd2-4c74-825b-1e280df24dd4︡{"stdout":"[(-4, 5), (10, -30), (-9/4, 5/8), (10, 19), (-4, -2)]\n"}︡{"once":false,"file":{"show":true,"uuid":"a4155a7f-e1ef-4a38-b3a6-80b857694c47","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_AKs7b7.svg"}}︡{"html":"<div align='center'></div>"}︡
︠1f473e51-e43d-4496-ab2b-c1f8d65198c4s︠
E=EllipticCurve("14a6");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, -0.5,2.5,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/14a6-order6a.pdf');
p2.save_image('graphs/14a6-order6b.pdf');
p3.save_image('graphs/14a6-order6c.pdf');
︡a196a044-fd73-4c25-a255-465debc9aadd︡{"stdout":"[(0, 3), (2, -2), (7/4, -11/8), (2, -1), (0, -4)]\n"}︡{"once":false,"file":{"show":true,"uuid":"60e5a835-52cf-4eed-a2b1-f5a2baab72f6","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_XOjVyI.svg"}}︡{"html":"<div align='center'></div>"}︡
︠c1f23158-8a2a-48d7-bf25-be5ebc7441f1s︠
E=EllipticCurve("14a4");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,1.5,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/14a4-order6a.pdf');
p2.save_image('graphs/14a4-order6b.pdf');
p3.save_image('graphs/14a4-order6c.pdf');
︡7d31cb42-7274-48b4-93c6-0103d83d24fd︡{"stdout":"[(1, 0), (0, 0), (-1, 0), (0, -1), (1, -2)]\n"}︡{"once":false,"file":{"show":true,"uuid":"1d0f0191-0c6f-4ad2-b987-a7dacf3a796f","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_D3zVdY.svg"}}︡{"html":"<div align='center'></div>"}︡
︠7481be27-2f8b-41e2-bc4a-470c4ce4308ds︠
E=EllipticCurve("14a1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/14a1-order6a.pdf');
p2.save_image('graphs/14a1-order6b.pdf');
p3.save_image('graphs/14a1-order6c.pdf');
︡a06a5d1d-aa0e-4e8f-be04-d7be057fd1b3︡{"stdout":"[(9, 23), (2, 2), (1, -1), (2, -5), (9, -33)]\n"}︡{"once":false,"file":{"show":true,"uuid":"96859ad2-8d98-4c6d-9b78-3dc75367da57","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_PSiKxS.svg"}}︡{"html":"<div align='center'></div>"}︡
︠9cc7e81d-9069-4d92-949b-9dc22738305bs︠
E=EllipticCurve("26b1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/26b1-order7a.pdf');
p2.save_image('graphs/26b1-order7b.pdf');
p3.save_image('graphs/26b1-order7c.pdf');
︡f9081621-5bc3-42de-ad16-51dd9d745a8d︡{"stdout":"[(-1, 2), (3, -6), (1, 0), (1, -2), (3, 2), (-1, -2)]\n"}︡{"once":false,"file":{"show":true,"uuid":"e1ef9cf2-6cfd-46b9-85a0-b9305cb607d8","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_wzR_x6.svg"}}︡{"html":"<div align='center'></div>"}︡
︠a7ed8a73-3e26-4103-8a74-f1cfd944fc94︠
︡84a2745d-db66-47b8-9c82-42a5999670a7︡
︠2a65064f-7db4-474c-b496-265ff461da4es︠
E=EllipticCurve("174b1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/174b1-order7a.pdf');
p2.save_image('graphs/174b1-order7b.pdf');
p3.save_image('graphs/174b1-order7c.pdf');
︡4f0c2257-cb8f-4f3c-ada4-c58f470d4a80︡{"stdout":"[(2, 11), (-4, -7), (14, -61), (14, 47), (-4, 11), (2, -13)]\n"}︡{"once":false,"file":{"show":true,"uuid":"fbcb3b1a-841f-4b55-bb4a-c79a34951c45","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_bQIae4.svg"}}︡{"html":"<div align='center'></div>"}︡
︠4f6e0942-d40e-48cb-b711-32600ae25b68s︠
E=EllipticCurve("258f1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-3,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/258f1-order7a.pdf');
p2.save_image('graphs/258f1-order7b.pdf');
p3.save_image('graphs/258f1-order7c.pdf');
︡74436033-6eaa-46bc-ac00-5a258c72e727︡{"stdout":"[(-6, 27), (42, -309), (6, 51), (6, -57), (42, 267), (-6, -21)]\n"}︡{"once":false,"file":{"show":true,"uuid":"6622aab9-1f07-45eb-8079-6915b4d56d73","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_o6Gc3V.svg"}}︡{"html":"<div align='center'></div>"}︡
︠a81993ef-569d-405e-bc92-c133bf8d0c64s︠
E=EllipticCurve("15a4");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/15a4-order8a.pdf');
p2.save_image('graphs/15a4-order8b.pdf');
p3.save_image('graphs/15a4-order8c.pdf');
︡74570931-cbc6-4de6-b719-31079c376b81︡{"stdout":"[(2, 6), (7, -29), (32, 171), (3/4, -7/8), (32, -204), (7, 21), (2, -9)]\n"}︡{"once":false,"file":{"show":true,"uuid":"7e28f3d8-b254-4925-8d49-bdbbfb3152a0","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_CeUvll.svg"}}︡{"html":"<div align='center'></div>"}︡
︠4fba1f4f-ce82-42cf-a813-50173db381f3s︠
E=EllipticCurve("21a3");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/21a3-order8a.pdf');
p2.save_image('graphs/21a3-order8b.pdf');
p3.save_image('graphs/21a3-order8c.pdf');
︡09cace4d-46f4-4d40-98c3-4e0609a80163︡{"stdout":"[(-3, 15), (6, -12), (3, 0), (15/4, -15/8), (3, -3), (6, 6), (-3, -12)]\n"}︡{"once":false,"file":{"show":true,"uuid":"6079a2bf-951a-4ca3-98d9-aabd984f1493","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_ub__kg.svg"}}︡{"html":"<div align='center'></div>"}︡
︠3e275c2f-f593-4f2a-bb69-fbb71a1167c9s︠
E=EllipticCurve("42a1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/42a1-order8a.pdf');
p2.save_image('graphs/42a1-order8b.pdf');
p3.save_image('graphs/42a1-order8c.pdf');
︡437f540b-1ab3-4fba-93be-1161c1f6b037︡{"stdout":"[(-1, 3), (1, -3), (5, 9), (-3, 1), (5, -15), (1, 1), (-1, -3)]\n"}︡{"once":false,"file":{"show":true,"uuid":"aae448f1-4e2a-4091-b9d3-6c643379d414","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_fUN_Gm.svg"}}︡{"html":"<div align='center'></div>"}︡
︠99f26f4f-66d2-4af5-b8ed-70cf51b10fd0︠
E=EllipticCurve("48a6");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/48a6-order8a.pdf');
p2.save_image('graphs/48a6-order8b.pdf');
p3.save_image('graphs/48a6-order8c.pdf');
︡02556ec2-98c6-4493-979c-01a6bce2a917︡{"stdout":"[(-2, 12), (4, -18), (22, 108), (-5, 0), (22, -108), (4, 18), (-2, -12)]\n"}︡{"once":false,"file":{"show":true,"uuid":"1e0a0421-d545-437a-9f2f-3d3a9a9cdef6","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_kDT0Bv.svg"}}︡{"html":"<div align='center'></div>"}︡
︠a8d9d4b9-7e48-41d8-b841-71003c46e276s︠
E=EllipticCurve("54b3");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-1.5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/54b3-order9a.pdf');
p2.save_image('graphs/54b3-order9b.pdf');
p3.save_image('graphs/54b3-order9c.pdf');
︡1453b4d2-0bc1-4228-9dcf-9aa6d9ceec2f︡{"stdout":"[(-3, 7), (9, -29), (1, 3), (3, -5), (3, 1), (1, -5), (9, 19), (-3, -5)]\n"}︡{"once":false,"file":{"show":true,"uuid":"8e30601a-d755-4cff-a43c-d4454bc5899b","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_hmPQuk.svg"}}︡{"html":"<div align='center'></div>"}︡
︠4fbcfcdd-4d3e-4a00-bd86-c6c6f5ebd077s︠
E=EllipticCurve("714i1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/714i1-order9a.pdf');
p2.save_image('graphs/714i1-order9b.pdf');
p3.save_image('graphs/714i1-order9c.pdf');
︡98998d2d-e310-40ff-9ec5-187ee7e5c332︡{"stdout":"[(-18, 72), (108, -1188), (0, 108), (24, -180), (24, 156), (0, -108), (108, 1080), (-18, -54)]\n"}︡{"once":false,"file":{"show":true,"uuid":"6a376fde-874a-470a-b0ee-b2330699a298","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_AzEz31.svg"}}︡{"html":"<div align='center'></div>"}︡
︠9a388d70-f0c8-4648-9f90-6f4f3619024ds︠
E=EllipticCurve("1482l1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/1482l1-order9a.pdf');
p2.save_image('graphs/1482l1-order9b.pdf');
p3.save_image('graphs/1482l1-order9c.pdf');
︡22fadf97-304b-4515-be03-30149190a404︡{"stdout":"[(-24, 324), (600, -15276), (24, 852), (132, -2172), (132, 2040), (24, -876), (600, 14676), (-24, -300)]\n"}︡{"once":false,"file":{"show":true,"uuid":"e64065dd-46e7-4b3c-9904-b9333a18d9ed","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_CpPTiz.svg"}}︡{"html":"<div align='center'></div>"}︡
︠d66192fa-91b3-4d31-860d-e48f6313e3a4s︠
E=EllipticCurve("1554n1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/1554n1-order9a.pdf');
p2.save_image('graphs/1554n1-order9b.pdf');
p3.save_image('graphs/1554n1-order9c.pdf');
︡6eb81592-1d01-4b37-86f0-11f893ffffe1︡{"stdout":"[(-42, 525), (84, -609), (30, 93), (42, -63), (42, 21), (30, -123), (84, 525), (-42, -483)]\n"}︡{"once":false,"file":{"show":true,"uuid":"ac859147-39a4-4eca-9384-7db917b3e2a9","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_KaAPrq.svg"}}︡{"html":"<div align='center'></div>"}︡
︠9713650d-7fcf-4ba5-91f6-8e9558ff5431s︠
E=EllipticCurve("66c1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/66c1-order10a.pdf');
p2.save_image('graphs/66c1-order10b.pdf');
p3.save_image('graphs/66c1-order10c.pdf');
︡c26fc566-7061-4a2b-8711-0f75216227b0︡{"stdout":"[(0, 9), (6, 3), (-6, -9), (18, -81), (2, -1), (18, 63), (-6, 15), (6, -9), (0, -9)]\n"}︡{"once":false,"file":{"show":true,"uuid":"ef82406e-d039-4ef8-b4e1-5909d3b128b5","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_hmsF1y.svg"}}︡{"html":"<div align='center'></div>"}︡
︠7901bc3d-88fe-4054-b4fc-e0c4a877ca62s︠
E=EllipticCurve("90c3");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/90c3-order12a.pdf');
p2.save_image('graphs/90c3-order12b.pdf');
p3.save_image('graphs/90c3-order12c.pdf');
︡27a28037-ec0f-4dff-9382-3b2bae2db5a2︡{"stdout":"[(-9, 49), (21, -101), (9, 31), (1, -41), (81, 679), (-15, 7), (81, -761), (1, 39), (9, -41), (21, 79), (-9, -41)]\n"}︡{"once":false,"file":{"show":true,"uuid":"331fd94d-6866-412a-a56f-367fb7417911","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_YLHqWh.svg"}}︡{"html":"<div align='center'></div>"}︡
︠76a282f5-c6c1-45d9-9492-5c43d6128789s︠
E=EllipticCurve("210b5");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();o;
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/210b5-order12a.pdf');
p2.save_image('graphs/210b5-order12b.pdf');
p3.save_image('graphs/210b5-order12c.pdf');
︡c1c5a238-9cca-4b09-a984-a95400881f9a︡{"stdout":"[(-5, 107), (100, -1153), (37, 359), (10, -208), (415, 8297), (-41/4, 37/8), (415, -8713), (10, 197), (37, -397), (100, 1052), (-5, -103)]\n"}︡{"stdout":"12\n"}︡{"once":false,"file":{"show":true,"uuid":"3cd2c39f-f3f5-4d75-be03-9b77923d9db7","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_UcKYJY.svg"}}︡{"html":"<div align='center'></div>"}︡
︠e439ff45-5570-46c9-98e0-1a80a306f247s︠
E=EllipticCurve("2730bd1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();o;
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/2730bd1-order12a.pdf');
p2.save_image('graphs/2730bd1-order12b.pdf');
p3.save_image('graphs/2730bd1-order12c.pdf');
︡62c26b57-8fee-44b7-bc8d-7aa6574860f2︡{"stdout":"[(84, 63), (294, 4263), (42, 735), (114, 303), (-126, 1743), (98, -49), (-126, -1617), (114, -417), (42, -777), (294, -4557), (84, -147)]\n"}︡{"stdout":"12\n"}︡{"once":false,"file":{"show":true,"uuid":"c3b64f75-2736-47aa-bf72-46a4a64a9e9d","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_lXkQhI.svg"}}︡{"html":"<div align='center'></div>"}︡
︠4fd88712-7fc5-4a51-adf2-fcec8ad6579as︠
E=EllipticCurve("4290bb4");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();o;
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/4290bb4-order12a.pdf');
p2.save_image('graphs/4290bb4-order12b.pdf');
p3.save_image('graphs/4290bb4-order12c.pdf');
︡3bc61e7f-047f-44e5-97cd-95585e262728︡{"stdout":"[(-390, 15990), (780, -15600), (312, 2652), (420, -1020), (390, 0), (1599/4, -1599/8), (390, -390), (420, 600), (312, -2964), (780, 14820), (-390, -15600)]\n"}︡{"stdout":"12\n"}︡{"once":false,"file":{"show":true,"uuid":"25286b3e-007c-4e2d-ae77-025343a9b3ce","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_B_hOyK.svg"}}︡{"html":"<div align='center'></div>"}︡
︠9b1e9fce-047b-4a70-8274-dbb3b9b54279s︠
E=EllipticCurve("6630w1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();o;
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/6630w1-order12a.pdf');
p2.save_image('graphs/6630w1-order12b.pdf');
p3.save_image('graphs/6630w1-order12c.pdf');
︡83b119aa-475b-44c6-b47b-bbacfb395810︡{"stdout":"[(1016, 6122), (3668, -208690), (1796, 55262), (1220, -20194), (14276, 1690142), (964, -482), (14276, -1704418), (1220, 18974), (1796, -57058), (3668, 205022), (1016, -7138)]\n"}︡{"stdout":"12\n"}︡{"once":false,"file":{"show":true,"uuid":"c1666411-c031-4d74-85a4-20f6c79ece91","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_P0EXeP.svg"}}︡{"html":"<div align='center'></div>"}︡
︠8126b059-de9c-4faf-be03-4a4ba14d50f5︠

︠569aa161-fd11-4b47-baa8-e6f0b25a2bf6s︠
E=EllipticCurve("30030bt1");
G=E.torsion_subgroup();
Pg=G.gen(0);
V=[(i,i+1) for i in [1..Pg.order()-1]];
for i in [0..Pg.order()-2]:
    Q=(i+1)*Pg;
    V[i]=(Q.element()[0],Q.element()[1]);
print(V);
Vmax=max(V[i][0] for i in [0..Pg.order()-2]);
Vmin=min(V[i][0] for i in [0..Pg.order()-2]);
Ep = plot(E, Vmin-5,Vmax+1,thickness=2);
P=point(V,pointsize=30,rgbcolor=(0,0,0));
P2=point(V[0],pointsize=100,rgbcolor=(0,0,0));
k=2;
o=Pg.order();o;
L1=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
L=[L1 for i in [1..o-2]];
for k in [1..o-2]:
    L[k-1]=line([V[0],V[(o-1)-k]],rgbcolor=(1,0,0));
plotty=Ep;
for k in [1..o-2]:
    plotty=plotty+L[k-1];
p1=Ep+P2;
p2=Ep+P+P2;
p3=Ep+P+P2+plotty;
show(p3);
p1.save_image('graphs/30030bt1-order12a.pdf');
p2.save_image('graphs/30030bt1-order12b.pdf');
p3.save_image('graphs/30030bt1-order12c.pdf');
︡db1c6e30-b6f0-4e5b-896b-fd65ba9bbac8︡{"stdout":"[(-334, 22007), (758, -11845), (506, 3527), (290, -8569), (2396, 109367), (-1006, 503), (2396, -111763), (290, 8279), (506, -4033), (758, 11087), (-334, -21673)]\n"}︡{"stdout":"12\n"}︡{"once":false,"file":{"show":true,"uuid":"e266395d-8807-48d0-bbfb-d5817b712c81","filename":"/projects/cef2d1fd-c682-4047-ad8c-65ca3a183dc7/.sage/temp/compute5dc1/32173/tmp_CCjAdh.svg"}}︡{"html":"<div align='center'></div>"}︡
︠6323c0af-6218-4fd3-a901-b81d6ccfedf8︠









