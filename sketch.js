urls = [
  //"https://cdn.discordapp.com/icons/432362911000690699/30484a6aaa9dd447014bf075da12d72d.webp?size=32", // server icon
  "https://cdn.discordapp.com/emojis/915012226920882186.webp", //chatpanik
  "https://cdn.discordapp.com/emojis/786540772575936513.webp", //dino
  "https://cdn.discordapp.com/emojis/803643448870699058.webp", //spaghet
  "https://cdn.discordapp.com/emojis/748557532246704139.webp", //communism
  //"https://cdn.discordapp.com/emojis/1057954217228238888.webp", //hooty angry
  "https://cdn.discordapp.com/emojis/1085122356990722138.webp", //baadmim
  "https://cdn.discordapp.com/emojis/962719962999447562.webp", //poutou
  "https://cdn.discordapp.com/emojis/786534486858792960.webp", //bonk
  "https://cdn.discordapp.com/emojis/786534486589440030.webp", //canar
  "https://cdn.discordapp.com/emojis/932956934854832148.webp", //crafting_table
  "https://cdn.discordapp.com/emojis/785455662313504788.webp", //cringe
  //"https://cdn.discordapp.com/emojis/1057955532746526721.webp", //crying hooty
  "https://cdn.discordapp.com/emojis/782590124327698442.webp", //cute af
  "https://cdn.discordapp.com/emojis/786534486471999509.webp", //drop
  "https://cdn.discordapp.com/emojis/916052278610395176.webp", //duckzuya
  "https://cdn.discordapp.com/emojis/838694487617830913.webp", //frog
  "https://cdn.discordapp.com/emojis/987346036014088282.webp", //senbdie
  "https://cdn.discordapp.com/emojis/747831877733318716.webp", //guudmim
  "https://cdn.discordapp.com/emojis/804281599944294480.webp", //inthesauce
  "https://cdn.discordapp.com/emojis/952870336309895198.webp", //tabassechaise
  "https://cdn.discordapp.com/emojis/786534486296363029.webp", //lapignon
  "https://cdn.discordapp.com/emojis/732229259581587456.webp", //loss
  "https://cdn.discordapp.com/emojis/932957399529189479.webp", //not crafting table
  "https://cdn.discordapp.com/emojis/850030259885572146.webp", //not table
  "https://cdn.discordapp.com/emojis/984536923861291058.webp", //not table mais oui
  //"https://cdn.discordapp.com/emojis/1057955525964349442.webp", //ominous hooty
  "https://cdn.discordapp.com/emojis/815194289390878720.webp", //ono
  "https://cdn.discordapp.com/emojis/855037380390289438.webp", //onopanic
  "https://cdn.discordapp.com/emojis/952621506192617523.webp", //cheh
  "https://cdn.discordapp.com/emojis/823976942713045033.webp", //pingun
  "https://cdn.discordapp.com/emojis/848926764557402173.webp", //potetre
  "https://cdn.discordapp.com/emojis/755713982903615538.webp", //table
  "https://cdn.discordapp.com/emojis/984541194442915960.webp", //scoubidoubt
  "https://cdn.discordapp.com/emojis/850030661439848459.webp", //semi table
  //"https://cdn.discordapp.com/emojis/1057955539822321724.webp", //sweat hooty
  "https://cdn.discordapp.com/emojis/851475923672498256.webp", //tomat
  "https://cdn.discordapp.com/emojis/780089263882108958.webp", //transpi
  "https://cdn.discordapp.com/emojis/749999781186764962.webp", //trrigolo
  "https://cdn.discordapp.com/emojis/1002910509818986516.webp", //truc
  "https://cdn.discordapp.com/emojis/994275880861966367.webp", //ue
  "https://cdn.discordapp.com/emojis/785575607655202816.gif", //parrot
];
imgs = [];
emote_size = 30;

full = true;

canvas_X = 700;
canvas_Y = 900;

padding = 1.6 * emote_size;
offset = padding / 2;

ncol = Math.round(canvas_X / padding);
nrow = Math.round(canvas_Y / padding);



function preload() {
  imgs = urls.map((element) => {
    return loadImage(element); //.resize(50, 0);
  });
}

function setup() {
  if(full){
    canvas_X = windowWidth
    canvas_Y = windowHeight
    ncol = Math.round(canvas_X / padding);
    nrow = Math.round(canvas_Y / padding);
  }

  createCanvas(canvas_X, canvas_Y);

  for (let index = 0; index < imgs.length; index++) {
    if (imgs[index].width > imgs[index].height) {
      imgs[index].resize(emote_size, 0);
    } else {
      imgs[index].resize(0, emote_size);
    }
  }
}

function draw() {
  noLoop() 
  background(color(255, 204, 0));
  last_i = -1

  for (let row = 0; row < nrow; row++) {
    for (let col = 0; col < ncol; col++) {
      i = Math.floor((Math.random() * imgs.length ));
      if(last_i == i) i = (i +1) % imgs.length
      last_i = i
      image(
        //imgs[(nrow * row + col) % imgs.length],
        imgs[i],
        col * padding + (row % 2) * offset,
        row * padding
      );
    }
  }
}
