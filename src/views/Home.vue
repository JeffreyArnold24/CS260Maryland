<template>
<div>
  <h1>Maryland</h1>
  <div id="main">
<div id="topLeft">Come see why the 7th state is number 1 in our books!</div>
<div id="topRight">Plan your Maryland getaway by going to the Locations tab. You can see the places you want to go in the Plan tab.</div>
<div id="bottomLeft">There is fun for everyone in Maryland</div>
<div id="bottomRight">The history! The class! The culture!</div>
</div>
</div>
</template>



<style>

h1{
font-size: 100px;
display: flex;
justify-content: center;
}

#main{
display: grid;
grid-template-columns: 50% 50%;
grid-column-gap: 20px;
grid-row-gap: 20px;

}

#topLeft{

background: #F3D42D;
height: 300px;
font-size: 70px;
text-align: center;
padding: 10px;
}
#topRight{

background: #FF2817;
height: 300px;
padding: 10px;
font-size: 50px;
text-align: center;
}
#bottomLeft{
background: #FF2817;
height: 300px;
font-size: 70px;
text-align: center;
padding: 10px;
}
#bottomRight{
background: #F3D42D;
height: 300px;
font-size: 70px;
text-align: center;
padding: 10px;
}
</style>
