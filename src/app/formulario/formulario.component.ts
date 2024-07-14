import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data-service.service';
import { SignatureService } from '../signature.service';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formData: any = {
    nomeCompleto: '',
    cargo: '',
    area: '',
    ramal: '',
    telefone: '',
    email: '',
    selectedAddress: 'Terraço Shopping - St SHC/AOS, Ea 02/08 - Loja 262',
    autoTelefone:''
  };

  constructor(
    private sharedDataService: SharedDataService,
    private signatureService: SignatureService
  ) { }

  ngOnInit() {
    
    this.updateAutoTelefone();
    this.sharedDataService.setFormData(this.formData);
    
  }

  onInputChange() {
    // Atualiza os dados no serviço compartilhado
   this.updateAutoTelefone();
    this.sharedDataService.setFormData(this.formData);
  }

    updateAutoTelefone() {
    if (this.formData.selectedAddress === 'Terraço Shopping - St SHC/AOS, Ea 02/08 - Loja 262') {
      this.formData.autoTelefone = '1121692204';
    } else {
      this.formData.autoTelefone = '';
    }
  }

  generateSignatureImage() {
    const signatureContainerRef = this.signatureService.getSignatureContainerRef();

    if (signatureContainerRef) {
      html2canvas(signatureContainerRef.nativeElement, {
        scale: 1.5, // Aumenta a escala do canvas para melhorar a qualidade da imagem
        useCORS: true, // Permite usar recursos carregados de diferentes origens
        allowTaint: true, // Permite o uso de imagens que não possuem CORS habilitado
        backgroundColor: null // Garante que a cor de fundo seja transparente
      }).then(canvas => {
        // Convertendo o canvas em uma URL de dados
        const image = canvas.toDataURL('image/png');

        // Criando um elemento de link para fazer o download da imagem
        const link = document.createElement('a');
        link.href = image;
        link.download = 'assinatura.png';
        link.click();
      });
    } else {
      console.error('Elemento signatureContainer não encontrado.');
    }
  }


}
