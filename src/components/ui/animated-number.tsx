import { cn } from '@/lib/utils';
import { motion, useSpring, useTransform, type SpringOptions } from 'framer-motion';
import { useEffect } from 'react';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: keyof React.JSX.IntrinsicElements;
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as = 'span',
}: AnimatedNumberProps) {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = motion.create(as as any);

  return (
    <Component className={cn('tabular-nums', className)}>
      {display}
    </Component>
  );
}