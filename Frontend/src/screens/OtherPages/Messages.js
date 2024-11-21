import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Form, Nav } from 'react-bootstrap';
import SearchBar from './SearchBar';
import ResultNavigation from './ResultNavigation';
import './Messages.css';

const initialMessages = [
  { id: "message1", sender: "Computer Science Club", subject: "Bi-weekly Updates, Comp-Sci", snippet: "New event coming up on Dec 2, 2024! See more...", uploaded_at: "2024-11-14", read: false },
  { id: "message2", sender: "Cybersecurity Travel Team", subject: "IMPORTANT: Markdown Attendance for upcoming event", snippet: "Hello team members, hope you're well today! This is regarding...", uploaded_at: "2024-11-18", read: false },
  { id: "message3", sender: "Game Development Club", subject: "Club Hangout moved (Cancelled on 12/05/24)", snippet: "Due to some issues with location, we are moving our get-together...", uploaded_at: "2024-11-20" },

  {/*
        { id: "message1", sender: "Google+", subject: "You were tagged in 3 photos", snippet: "Google+ You were tagged in three photos...", uploaded_at: "2024-10-20", read: false },
        { id: "message2", sender: "YouTube", subject: "LauraBlack just uploaded a video.", snippet: "Jess, have you seen the video LauraBlack...", uploaded_at: "2024-10-21", read: false },
        { id: "message3", sender: "Google+", subject: "You were tagged in 3 photos", snippet: "Google+ You were tagged in three photos...", uploaded_at: "2024-10-20" },
        { id: "message4", sender: "YouTube", subject: "LauraBlack just uploaded a video.", snippet: "Jess, have you seen the video LauraBlack...", uploaded_at: "2024-10-21" },
        { id: "message5", sender: "Google+", subject: "You were tagged in 3 photos", snippet: "Google+ You were tagged in three photos...", uploaded_at: "2024-10-20" },
        { id: "message6", sender: "YouTube", subject: "LauraBlack just uploaded a video.", snippet: "Jess, have you seen the video LauraBlack...", uploaded_at: "2024-10-21" },
        { id: "message7", sender: "Google+", subject: "You were tagged in 3 photos", snippet: "Google+ You were tagged in three photos...", uploaded_at: "2024-10-20" },
        { id: "message8", sender: "YouTube", subject: "LauraBlack just uploaded a video.", snippet: "Jess, have you seen the video LauraBlack...", uploaded_at: "2024-10-21" },
        { id: "message9", sender: "Google+", subject: "You were tagged in 3 photos", snippet: "Google+ You were tagged in three photos...", uploaded_at: "2024-10-20" },
        { id: "message10", sender: "YouTube", subject: "LauraBlack just uploaded a video.", snippet: "Jess, have you seen the video LauraBlack...", uploaded_at: "2024-10-21" },
        { id: "message11", sender: "Google+", subject: "You were tagged in 3 photos", snippet: "Google+ You were tagged in three photos...", uploaded_at: "2024-10-20" },
        { id: "message12", sender: "YouTube", subject: "LauraBlack just uploaded a video.", snippet: "Jess, have you seen the video LauraBlack...", uploaded_at: "2024-10-21" },
        { id: "message13", sender: "Google+", subject: "You were tagged in 3 photos", snippet: "Google+ You were tagged in three photos...", uploaded_at: "2024-10-20" },
        { id: "message14", sender: "YouTube", subject: "LauraBlack just uploaded a video.", snippet: "Jess, have you seen the video LauraBlack...", uploaded_at: "2024-10-21" },
        { id: "message15", sender: "Google+", subject: "You were tagged in 3 photos", snippet: "Google+ You were tagged in three photos...", uploaded_at: "2024-10-20" },
        { id: "message16", sender: "YouTube", subject: "LauraBlack just uploaded a video.", snippet: "Jess, have you seen the video LauraBlack...", uploaded_at: "2024-10-21" },
        { id: "message17", sender: "Google+", subject: "You were tagged in 3 photos", snippet: "Google+ You were tagged in three photos...", uploaded_at: "2024-10-20" },
        { id: "message18", sender: "YouTube", subject: "LauraBlack just uploaded a video.", snippet: "Jess, have you seen the video LauraBlack...", uploaded_at: "2024-10-21" },
         */}
];

const ITEMS_PER_PAGE = 5;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [filteredMessages, setFilteredMessages] = useState(initialMessages);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [activeMessage, setActiveMessage] = useState(null);
  const [activeMessageContent, setActiveMessageContent] = useState(null);
  const [showCompose, setShowCompose] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [formData, setFormData] = useState({ to: '', cc: '', bcc: '', message: '' });
  const [replyData, setReplyData] = useState({ to: '', message: '' });
  const [errors, setErrors] = useState({ to: '', cc: '', bcc: '', message: '' });
  const [replyError, setReplyError] = useState(''); // Track error for reply message

  useEffect(() => {
    if (filter === 'all') {
      setFilteredMessages(messages);
    } else if (filter === 'read') {
      setFilteredMessages(messages.filter(message => message.read));
    } else if (filter === 'unread') {
      setFilteredMessages(messages.filter(message => !message.read));
    }
    setCurrentPage(1);
  }, [filter, messages]);

  useEffect(() => {
    if (activeMessage) {
      const messageContent = messages.find(message => message.id === activeMessage);
      setActiveMessageContent(messageContent);
    }
  }, [activeMessage, messages]);

  const totalPages = Math.ceil(filteredMessages.length / ITEMS_PER_PAGE);

  const paginatedMessages = filteredMessages.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleSelectMessage = (messageId) => {
    setMessages(prevMessages =>
      prevMessages.map(message =>
        message.id === messageId ? { ...message, read: true } : message
      )
    );
    setActiveMessage(messageId);
  };

  const handleShowCompose = () => setShowCompose(true);
  const handleCloseCompose = () => {
    setShowCompose(false);
    setFormData({ to: '', message: '' });
    setErrors({ to: '', message: '' });
  };

  const handleShowReply = () => {
    if (activeMessageContent) {
      setReplyData({ to: activeMessageContent.sender, message: '' });
      setReplyError(''); // Clear any previous error
      setShowReply(true);
    }
  };

  const handleCloseReply = () => {
    setShowReply(false);
    setReplyData({ to: '', message: '' });
    setReplyError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReplyInputChange = (e) => {
    const { name, value } = e.target;
    setReplyData({ ...replyData, [name]: value });
    if (replyError && value.trim()) setReplyError(''); // Clear error when input is valid
  };

  const validateForm = () => {
    const newErrors = { to: '', message: '' };

    if (!formData.to) {
      newErrors.to = 'Please enter an email';
    } else if (!emailRegex.test(formData.to)) {
      newErrors.to = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'No message available';
    }

    setErrors(newErrors);

    return !newErrors.to && !newErrors.message;
  };

  const handleSendMessage = () => {
    if (validateForm()) {
      alert('Message sent successfully!');
      handleCloseCompose();
    }
  };

  const handleSendReply = () => {
    if (!replyData.message.trim()) {
      setReplyError('Please enter a reply message'); // Set error if message is empty
    } else {
      alert('Reply sent successfully!');
      handleCloseReply();
    }
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>

      <Row className="h-100 messages-row">
        <Col sm={4} className="message-list d-flex flex-column p-0">
          <SearchBar documents={messages} setFilteredDocuments={setFilteredMessages} />

          <Nav variant="pills" className="flex-column">
            {paginatedMessages.length > 0 ? (
              paginatedMessages.map((message) => (
                <Nav.Item key={message.id}>
                  <Nav.Link 
                    className="message-item"
                    onClick={() => handleSelectMessage(message.id)}
                  >
                    <strong style={{ fontWeight: message.read ? "normal" : "bold" }}>
                      {message.sender}
                    </strong>
                    <br />
                    <span style={{ fontWeight: message.read ? "normal" : "bold" }}>
                      {message.subject}
                    </span>
                    <br />
                    <small className="text-muted">{message.snippet}</small>
                  </Nav.Link>
                </Nav.Item>
              ))
            ) : (
              <div className="text-center p-3">
                <small className="text-muted">No messages available</small>
              </div>
            )}
          </Nav>

          <div className="mt-auto">
            <ResultNavigation
              currentPage={currentPage}
              totalItems={filteredMessages.length}
              itemsPerPage={ITEMS_PER_PAGE}
              onNextPage={handleNextPage}
              onPreviousPage={handlePreviousPage}
            />
          </div>
        </Col>

        <Col sm={8} className="message-content">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="filter-buttons">
              <Button variant="outline-primary" className="mx-2" onClick={() => setFilter('all')}>All</Button>
              <Button variant="outline-primary" className="mx-2" onClick={() => setFilter('read')}>Read</Button>
              <Button variant="outline-primary" className="mx-2" onClick={() => setFilter('unread')}>Unread</Button>
            </div>
            <Button variant="primary" onClick={handleShowCompose}>Compose</Button>
          </div>

          {activeMessageContent ? (
            <div>
              <h2>{activeMessageContent.subject}</h2>
              <p><strong>From:</strong> {activeMessageContent.sender}</p>
              <p>{activeMessageContent.snippet}</p>
              <Button variant="primary" className="mt-3" onClick={handleShowReply}>Reply</Button>
            </div>
          ) : (
            <p>Select a message to view its content</p>
          )}
        </Col>
      </Row>

      {/* Compose Modal */}
      <Modal show={showCompose} onHide={handleCloseCompose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Compose Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTo">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter recipient's email"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                isInvalid={!!errors.to}
              />
              <Form.Control.Feedback type="invalid">{errors.to}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formMessageContent" className="mt-2">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your message here"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCompose}>Close</Button>
          <Button variant="primary" onClick={handleSendMessage}>Send</Button>
        </Modal.Footer>
      </Modal>

      {/* Reply Modal */}
      <Modal show={showReply} onHide={handleCloseReply} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reply Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="replyTo">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="email"
                placeholder="Recipient's email"
                value={replyData.to}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="replyMessageContent" className="mt-2">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your reply here"
                name="message"
                value={replyData.message}
                onChange={handleReplyInputChange}
                isInvalid={!!replyError}
              />
              <Form.Control.Feedback type="invalid">{replyError}</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseReply}>Close</Button>
          <Button variant="primary" onClick={handleSendReply}>Send</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Messages;