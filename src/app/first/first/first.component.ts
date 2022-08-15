import { Component, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { GeneratorService } from 'src/app/core/services/generator.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  constructor(
    @Optional() public configOptionsService: ConfigOptionsService,
    @Optional() public generatorService: GeneratorService,
    ) { }

  ngOnInit(): void {
  }

}
