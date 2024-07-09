import type { FC } from 'react';
import type { OnValuesChange } from '../../types';
import type { AllSizes } from '../../../../types';
import { Button, Flex, Form, Typography } from 'antd';
import { sizesTuple } from '../../../../const';
import { TShirtCountInput } from '../../../../../TShirtCountInput';

interface ManualProps {
  onValuesChange: OnValuesChange;
  initialValues: AllSizes;
}

export const ManualCount: FC<ManualProps> = ({
  onValuesChange,
  initialValues,
}) => (
  <>
    <Typography.Title level={2}>Count your T-Shirts</Typography.Title>
    <Form
      onValuesChange={onValuesChange}
      onReset={() => onValuesChange(undefined, initialValues)}
      name="basic"
      initialValues={initialValues}
    >
      <Flex gap={12} wrap>
        {sizesTuple.map((size) => (
          <Form.Item<AllSizes> key={size} name={size}>
            <TShirtCountInput size={size} />
          </Form.Item>
        ))}
      </Flex>
      <Button htmlType="reset">Reset</Button>
    </Form>
  </>
);