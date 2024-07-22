import { Component } from '@angular/core';

interface Project {
  name: String,
  screenshot: String,
  description: String,
  url: String
}


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  projects: Project[] = [
    {
      name: "MRU-V",
      screenshot:"https://cdn.discordapp.com/attachments/1251559783564181625/1265011645835382834/322269627-ccc7a533-0ccc-4e45-808d-122c075f6cc5.gif?ex=669ff567&is=669ea3e7&hm=82ab576adb492d4bdfbc9214f36705e74ddc30fe8de74efce3f79591901487be&",
      description: "Havia feito esse projeto durante uma semana para aprender a framework QT-6 e também revisar essa disciplina de física do 1° ano pois estava estudando para o vestibular.",
      url:"https://github.com/AlgumCorrupto/mru-v"
    },
    {
      name: "Byond to Robust",
      screenshot: "https://media.discordapp.net/attachments/1139279106123518073/1262486271343726685/image.png?ex=669f5736&is=669e05b6&hm=48a5ba1f54af661592fc456ef80784ea4d9169bfedfa40df7c32057baa59614e&=&format=webp&quality=lossless&width=1290&height=671",
      description: "Eu sou um contribuidor do Estação Pirata (Branch brasileira de um jogo Open-Source chamado Space Station-14). Essa ferramenta foi criada para portar mapas do Space Station 13 para o Space Station 14",
      url: "https://github.com/AlgumCorrupto/byondtorobust"
    },
    {
      name: "Mode-7 Shader",
      screenshot: "https://cdn.discordapp.com/attachments/1251559783564181625/1264981787822522459/capture3.gif?ex=669fd998&is=669e8818&hm=7071b9fbbd629b52ebd909358ddc8edfe6bcf1e38a6e70bf9a40f984bafa4b1b&",
      description: "Baseado no vídeo entitulado Programming Pseudo 3D Planes aka MODE7 (C++) do One Lone Coder (javidx9) transformei o algoritmo num shader",
      url: "https://www.shadertoy.com/view/Xclcz2"
    },
    {
      name: "B.A.R.E Bones",
      screenshot: "https://cdn.discordapp.com/attachments/1251559783564181625/1265011736847581205/307481593-edaa0c04-893f-4f16-9298-c6f8ac600377.gif?ex=669ff57c&is=669ea3fc&hm=e7892ffc499f2d40f1864361456aaec4201d6dc7747eafc03fe4f9a1a0faeb25&",
      description: "Transformações básicas feitas no HTML5 canvas vanilla",
      url: "https://github.com/AlgumCorrupto/B.A.R.E.-Bones"
    }
  ]
}
