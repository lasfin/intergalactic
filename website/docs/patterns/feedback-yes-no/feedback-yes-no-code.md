---
title: FeedbackYesNo
tabs: Design('feedback-yes-no'), A11y('feedback-yes-no-a11y'), Example('feedback-yes-no-code')
---

## FeedbackYesNo example

::: sandbox

<script lang="tsx">
import React from 'react';
import FeedbackForm from '@semcore/ui/feedback-form';
import Input from '@semcore/ui/input';
import { Box, Flex } from '@semcore/ui/flex-box';
import Link from '@semcore/ui/link';
import Dropdown from '@semcore/ui/dropdown';
import Textarea from '@semcore/ui/textarea';
import Notice from '@semcore/ui/notice';
import Button from '@semcore/ui/button';
import ThumbUpM from '@semcore/ui/icon/ThumbUp/m';
import ThumbDownM from '@semcore/ui/icon/ThumbDown/m';
import { Text } from '@semcore/ui/typography';
import FeedbackIllustration from '@semcore/ui/illustration/Feedback';

const validate = {
  description: (value = '') => {
    const splitText = value.split(' ');
    const numberSpaces = splitText.reduce((acc, item) => {
      if (!item.length) {
        acc += 1;
      }
      return acc;
    }, 0);
    if (value.length - numberSpaces < 10 || splitText.length <= 2) {
      return 'Your feedback must contain at least 3 words (10 characters).';
    }
  },
  email: (value = '') => {
    validate.description(value);
    if (!/.+@.+\..+/i.test(String(value).toLowerCase())) {
      return 'Please enter valid email.\t';
    }
  },
};

class Feedback extends React.PureComponent<{
  status: string;
  onSubmit: (data: any) => void;
  onCancel: () => void;
  onChange?: (event: any, trigger: string) => void;
  value?: { description: string; email: string };
}> {
  handleChange = (fn) => (_, e) => {
    fn(e);
  };

  render() {
    const { status, onSubmit, onCancel } = this.props;

    if (status === 'success') {
      return <FeedbackForm.Success>Thank you for your feedback!</FeedbackForm.Success>;
    }

    return (
      <FeedbackForm onSubmit={onSubmit} loading={status === 'loading'}>
        <Box p={4}>
          <Flex tag='label' direction='column' htmlFor='suggestions'>
            <Text mb={2} size={200}>
              Tell us your suggestion or report an issue
            </Text>
            <FeedbackForm.Item name='feedback' validate={validate.description}>
              {({ input }) => (
                <Textarea
                  {...input}
                  autoFocus
                  h={80}
                  onChange={this.handleChange(input.onChange)}
                  id='suggestions'
                />
              )}
            </FeedbackForm.Item>
          </Flex>
          <Flex tag='label' mt={4} direction='column' htmlFor='email'>
            <Text mb={2} size={200}>
              Reply-to email
            </Text>
            <FeedbackForm.Item name='email' validate={validate.email}>
              {({ input }) => (
                <Input state={input.state}>
                  <Input.Value {...input} onChange={this.handleChange(input.onChange)} id='email' />
                </Input>
              )}
            </FeedbackForm.Item>
          </Flex>
          <Box mt={2}>
            <Text lineHeight='18px' size={200} color='#6c6e79'>
              We will only use this email to respond to you on your feedback.{' '}
              <Link href='https://www.semrush.com/company/legal/privacy-policy/'>
                Privacy Policy
              </Link>
            </Text>
          </Box>
          <Flex mt={4}>
            <FeedbackForm.Submit>Send feedback</FeedbackForm.Submit>
            <FeedbackForm.Cancel onClick={onCancel}>Cancel</FeedbackForm.Cancel>
          </Flex>
        </Box>
        <FeedbackForm.Notice hidden={status === 'failed'}>
          You can also send us an email to <Link>backlink.audit@semrush.com</Link>
        </FeedbackForm.Notice>
        <FeedbackForm.Notice hidden={status !== 'failed'} theme='danger'>
          Your message has not been sent.
        </FeedbackForm.Notice>
      </FeedbackForm>
    );
  }
}

class FeedbackYesNo extends React.PureComponent {
  state = { status: 'default', visible: true };
  timeout: any;
  onSubmit = () => {
    this.requestServer('success', 1000);
    this.setState({ status: 'loading' });
  };
  requestServer = (status, time, cb?: () => void) => {
    this.timeout = setTimeout(() => {
      this.setState({ status });
      cb?.();
    }, time || 500);
  };
  changeVisible = (visible) => {
    this.setState({ visible });
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { status, visible } = this.state;

    return (
      <Notice
        hidden={!visible}
        style={{
          borderTop: 'none',
          borderRight: 'none',
          borderLeft: 'none',
          borderRadius: '0',
        }}
      >
        <Notice.Label mr={3} aria-hidden={true}>
          <FeedbackIllustration />
        </Notice.Label>
        <Notice.Content>
          <Text mr={4}>Do you find our On Page SEO Checker reports useful?</Text>
          <Box mt={2} inline>
            <Dropdown>
              <Dropdown.Trigger>
                <Button>
                  <Button.Addon>
                    <ThumbUpM />
                  </Button.Addon>
                  <Button.Text>Yes</Button.Text>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Popper>
                {(_props, { visible }) => (
                  <Feedback
                    status={status}
                    onCancel={() => visible(false)}
                    onSubmit={() => this.onSubmit()}
                  />
                )}
              </Dropdown.Popper>
            </Dropdown>
            <Dropdown>
              <Dropdown.Trigger ml={2}>
                <Button>
                  <Button.Addon>
                    <ThumbDownM />
                  </Button.Addon>
                  <Button.Text>No</Button.Text>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Popper>
                {(_props, { visible }) => (
                  <Feedback
                    status={status}
                    onCancel={() => visible(false)}
                    onSubmit={() => this.onSubmit()}
                  />
                )}
              </Dropdown.Popper>
            </Dropdown>
            <Button ml={2} use='tertiary' onClick={() => this.changeVisible(false)}>
              Ask me later
            </Button>
          </Box>
        </Notice.Content>
        <Notice.CloseIcon onClick={() => this.changeVisible(false)} />
      </Notice>
    );
  }
}

const Demo = FeedbackYesNo;
</script>

:::
