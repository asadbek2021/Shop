import { GeneratorService } from "./generator.service";

export function GeneratorFactory(n: number) {
  return (generatorService: GeneratorService):string => generatorService.generate(n);
}

