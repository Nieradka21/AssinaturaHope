import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedDataService } from '../shared-data-service.service';
import { SignatureService } from '../signature.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-assinatura',
  templateUrl: './assinatura.component.html',
  styleUrls: ['./assinatura.component.css']
})
export class AssinaturaComponent implements OnInit {
  formData: any = {}; // Objeto para armazenar os dados do formulário
  @ViewChild('signatureContainer', { static: true }) signatureContainer!: ElementRef;

  constructor(
    private sharedDataService: SharedDataService,
    private signatureService: SignatureService
  ) { }

  ngOnInit() {
    // Subscreve para receber atualizações dos dados do formulário
    this.sharedDataService.getFormData().subscribe(formData => {
      this.formData = formData;
    });
    // Guarda a referência do signatureContainer no serviço SignatureService
    this.signatureService.setSignatureContainerRef(this.signatureContainer);
  }
  generateSignatureImage() {
    
    html2canvas(this.signatureContainer.nativeElement).then(canvas => {
      // Convertendo para base64 para salvar ou exibir como necessário
      const image = canvas.toDataURL('image/png');
      console.log(image); // Aqui você pode enviar para o servidor ou usar como desejar
    });
  }

}
