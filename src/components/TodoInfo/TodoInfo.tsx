import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    user,
    completed,
    id,
  } = todo;

  return (
    <article
      data-id={id}
      className={
        classNames('TodoInfo', { 'TodoInfo--completed': completed })
      }
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>
      {user
        ? <UserInfo user={user} />
        : 'no user'}
    </article>
  );
};