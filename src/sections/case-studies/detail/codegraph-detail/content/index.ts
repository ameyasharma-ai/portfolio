import { technologiesContent } from './technologies';
import { challengeContent } from './challenge';
import { solutionContent } from './solution';
import { technicalImplementationContent } from './technical-implementation';
import { processContent } from './process';
import { reflectionContent } from './reflection';
import { nextStepsContent } from './next-steps';
import type { CaseStudyContent } from './types';

export const codegraphContent: CaseStudyContent = {
  sections: [
    technologiesContent,
    challengeContent,
    solutionContent,
    technicalImplementationContent,
    processContent,
    reflectionContent,
    nextStepsContent
  ]
};
